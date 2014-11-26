#Git Tools and Policies
##Projects
Development of the SocietyPro core is in SocietyPro/Cambrian-src.

We have other repositories for related code. 

The following branch policies apply to all SocietyPro repos.
##Branch Policies
###TLDR:  
>Every team has their own team branch with an 'owner'.

>The owner is responsible for frequently pulling commits from master onto their team branch.

>The team resolves merge conflicts when they appear from other teams on master.

>The team decides the commit policy for their team branch.  

>The owner is the only one allowed to make merge commits onto master from the team branch.

>Only code that is releasable to users is allowed on master.

>Use feature branches to make work-in-progress commits - committing unreleasable work to the team branch impedes your teammates who want to release their completed feature.

###**master**
This branch is the public face of the Society Pro project.
* Owner:  
  Jorge + Cesar  
* Commit Policy:  
  The **master** branch contains only "releasable" code that builds and passes all tests on Windows, Linux, and Mac.  
  The only commits to `master` should be merge commits from `xp-dev` or `dev-guanaja`.  
  Releasable means that a customer could run into the room as soon as the commit happens, say "Great! Let's go live now!", and nobody in the team will say "no, but wait".

###**xp-dev**
This branch is the staging point for sharing code among the XP Squad.
* Owner:  
  Jorge
* Commit Policy:  
  Code must have comments, placed before the code block.  
  Code must have tests.

###**dev-guanaja**
This branch is the staging point for sharing code among the Guanaja team.
* Owner:  
  Cesar
* Commit Policy:  
  TBD


##Syncing Branches
Since our project has multiple teams, we need a way to sync the different code we write.
This strategy encourages frequent commits and easy merge resolutions:

* Every commit to `master` should be either a merge commit from `xp-dev` or a merge commit from `dev-guanaja`.
* On every commit to master, the team branch owners are responsible for integrating the new code onto the team branch with a merge or rebase.
* Team members with personal branches or feature branches should then integrate the new code from the team branch onto their child branch.
* Thus, if X commits a feature to master before Y, it is Y's responsibility to include X's new feature in all future commits that are merged from Y's development branch to master.
* The sooner you resync your branch, the fewer conflicts you'll have.

<img src="assets/images/multi-team-sourcecontrol.gif"/>

Example code:

    $ ## XP Squad develops a new features:
    $ git checkout xp-dev
    $ git echo "conflicting change" > README.md
    $ git commit -m "Change readme"
    
    $ ## After all builds and tests green, XP Squad deploys the feature to master:
    $ git checkout master
    $ git merge xp-dev
    $ git push
    
    $ ## Guanaja Team begins development: 
    $ git checkout dev-guanaja
    $ git echo "new code" >> ICrypto.cpp
    $ git commit -m "ICrypto changes"
    
    $ ## Guanaja Team notices a new feature since their last master commit and updates dev-guanaja branch:
    $ git fetch origin
    $ git rebase origin/master
    
    $ ## Guanaja Team resolves any merge conflicts
    $ ## Guanaja Team completes their feature, gets green builds and tests, deploys to master
    $ git checkout master
    $ git merge dev-guanaja
    $ git push

