# zotero-detect-duplicate-authors

When installed in Zotero, this translator will exporting the list of potentially same authors but different naming style across papers to these can be manually corrected. The idea is based on the bug report https://github.com/retorquere/zotero-better-bibtex/issues/1067

**How to install**
1.  Download the [Detect duplicate authors.js](./Detect%20duplicate%20authors.js) file
2. Move the "Detect duplicate authors.js" file to "[User home directory]/Zotero/translators" folder 
3. Restart Zotero 

**How to run**
1. Select all the items you want to cross check
2. Right click, "Export Items…"
3. Select format “Detect duplicate authors across papers", click OK, Save
4. Check the exported txt file for duplicated authors

**Sample output**

Running on a real Zotero database the following, mostly real, different ways of referring to the same authors were detected:


```
Bayer, Joseph: Passive Facebook usage undermines affective well-being: Experimental and longitudinal evidence.
Bayer, Jordana K.: Parent influences on early childhood internalizing difficulties

D'Esposito, Fabrizio: Postpartum maternal separation anxiety, overprotective parenting, and children’s social-emotional well-being: Longitudinal evidence from an Australian cohort.
D’Esposito, Fabrizio: Stressful life events and the onset of chronic diseases among Australian adults: findings from a longitudinal survey

Smith, Andrew P: Stress models: A review and suggested new direction
Smith, Andrew P.: Negative life events, perceived stress, negative affect, and susceptibility to the common cold

Chen, Jew-Wu: Testing a model of stress and health using meta-analytic path analysis
Chen, Jue: Frequency of Borderline Personality Disorder Among Psychiatric Outpatients in Shanghai

Garber, Judy: The relation between parenting and adolescent depression: self-worth as a mediator
Barber, Jacques P.: Clinical severity as a moderator of outcome in psychodynamic and dialectical behavior therapies for borderline personality disorder.

Bowlby, John: Attachment and loss
Bowlby, J.: Attachment and loss. 1. Attachment

Horton, Mike C.: Assessing the predictability of self-harm in a high-risk adult prisoner population: a prospective cohort study
Horton, Mike: Assessing the risk of self-harm in an adult offender population: an incidence cohort study
Horton, Michael Colin: Screening for the risk of self-harm in an adult offender population

Wright, Nat M. J.: Assessing the predictability of self-harm in a high-risk adult prisoner population: a prospective cohort study
Wright, Nat: Assessing the risk of self-harm in an adult offender population: an incidence cohort study
```
