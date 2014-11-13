#Git Tools and Policies
##Commits

##Branches
Every branch has an owner and a commit policy. The owner decides the commit policy.

###**master**
This branch is the public face of the Society Pro project.
* Owner:  
  Hiro
* Commit Policy:  
  The **master** branch contains only "releasable" code that builds and passes all tests on Windows, Linux, and Mac.  
  The only commits to `master` should be merge commits from `xp-dev` or `xp-roatan`.  
  Releasable means that a customer could run into the room as soon as the commit happens, say "Great! Let's go live now!", and nobody in the team will say "no, but wait".

###**dev**
Currently under discussion

###**xp-dev**
This branch is the staging point for sharing code between XP Squad Developers.
* Owner:  
  Jorge
* Commit Policy:  
  Code must have comments, placed before the code block.  
  Code must have tests.

###**roatan-dev**
This branch is the staging point for sharing code between XP Squad Developers.
* Owner:  
  Dan
* Commit Policy:  
  TBD


##Syncing Branches
Since our project has multiple teams, we need a way to sync the different code we write.
This strategy encourages frequent commits and easy merge resolutions:

* Every commit to `master` should be either a merge commit from `xp-dev` or a merge commit from `roatan-dev`.
* On every commit to master, every team and team member is responsible for rebasing their branches with the new code. The sooner you resync your branch, the fewer conflicts you'll have.
* Thus, if X commits a feature to master before Y, it is Y's responsibility to include X's new feature in all future commits that are merged from Y's development branch to master.

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
    
    $ ## Roatan Team begins development: 
    $ git checkout roatan-dev
    $ git echo "new code" >> ICrypto.cpp
    $ git commit -m "ICrypto changes"
    
    $ ## Roatan Team notices a new feature since their last master commit and updates roatan-dev branch:
    $ git fetch origin
    $ git rebase origin/master
    
    $ ## Roatan Team resolves any merge conflicts
    $ ## Roatan Team completes their feature, gets green builds and tests, deploys to master
    $ git checkout master
    $ git merge roatan-dev
    $ git push

