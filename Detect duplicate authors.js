{
  "translatorID": "08dfa05d-3b55-47d5-8a05-c43cb6a1ae97",
  "label": "Detect duplicate authors across papers",
  "description": "Detect potentially misspelled but same authors across papers",
  "creator": "Adam Horvath",
  "target": "txt",
  "minVersion": "4.0.27",
  "maxVersion": "",
  "configOptions": {
    "getCollections": false
  },
  "displayOptions": {
    "exportFileData": false
  },
  "translatorType": 2,
  "browserSupport": "gcsv",
  "priority": 100,
  "inRepository": false,
  "lastUpdated": "2018-12-21 15:58:41"
}

var levenshtein = function(a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    // swap to save some memory O(min(a,b)) instead of O(a)
    if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    var row = [];
    // init the row
    for (var i = 0; i <= a.length; i++) {
        row[i] = i;
    }

    // fill in the rest
    for (var i = 1; i <= b.length; i++) {
        var prev = i;
        for (var j = 1; j <= a.length; j++) {
            var val;
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                val = row[j - 1]; // match
            } else {
                val = Math.min(row[j - 1] + 1, // substitution
                    prev + 1,     // insertion
                    row[j] + 1);  // deletion
            }
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }

    return row[a.length];
}

function doExport() {
    let items = [];
    let item = null;
    while (item = Zotero.nextItem()) {
        if(!item.creators){
            continue;
        }

        item.creators.forEach(creator => {
            items.push({
                author: {
                    firstName: creator.firstName.toLowerCase(),
                    lastName: creator.lastName.toLowerCase()
                },
                title: item.title
            });
        });
    }

    let reported = new Set();
    for (let i = 0; i < items.length; i++) {
        let duplicates = [items[i]];
        let author = items[i].author;

        for (let j = i + 1; j < items.length; j++) {
            let otherAuthor = items[j].author;
            if (author.firstName.substr(0, 1) != otherAuthor.firstName.substr(0, 1)) {
                continue;
            }

            let distance = levenshtein(author.lastName, otherAuthor.lastName);
            if (distance <= 1 && !reported.has(items[j]) && author.firstName != otherAuthor.firstName) {
                duplicates.push(items[j]);
                reported.add(items[j]);
            }
        }

        if (duplicates.length > 1) {
            duplicates.forEach(item => Zotero.write(item.author.lastName + ', ' + item.author.firstName + ': ' + item.title + '\n'));
            Zotero.write('\n');
        }
    }
}
