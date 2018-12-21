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
bayer, joseph: Passive Facebook usage undermines affective well-being: Experimental and longitudinal evidence.
bayer, jordana k.: Parent influences on early childhood internalizing difficulties

d'esposito, fabrizio: Postpartum maternal separation anxiety, overprotective parenting, and children’s social-emotional well-being: Longitudinal evidence from an Australian cohort.
d’esposito, fabrizio: Stressful life events and the onset of chronic diseases among Australian adults: findings from a longitudinal survey

smith, andrew p: Stress models: A review and suggested new direction
smith, andrew p.: Negative life events, perceived stress, negative affect, and susceptibility to the common cold

chen, jew-wu: Testing a model of stress and health using meta-analytic path analysis
chen, jue: Frequency of Borderline Personality Disorder Among Psychiatric Outpatients in Shanghai

garber, judy: The relation between parenting and adolescent depression: self-worth as a mediator
barber, jacques p.: Clinical severity as a moderator of outcome in psychodynamic and dialectical behavior therapies for borderline personality disorder.

bowlby, john: Attachment and loss
bowlby, j.: Attachment and loss. 1. Attachment

horton, mike c.: Assessing the predictability of self-harm in a high-risk adult prisoner population: a prospective cohort study
horton, mike: Assessing the risk of self-harm in an adult offender population: an incidence cohort study
horton, michael colin: Screening for the risk of self-harm in an adult offender population

wright, nat m. j.: Assessing the predictability of self-harm in a high-risk adult prisoner population: a prospective cohort study
wright, nat: Assessing the risk of self-harm in an adult offender population: an incidence cohort study
```
