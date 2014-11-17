#Git Submodules
A 'submodule' is a reference, stored in a parent repo, pointing at a specific commit of the child repo.

TASK: Get the most recent submodules from github
--------------------------------------------------------------

       Start in root:
    0. cd /c/dev/sopro/Cambrian-src
    
       Get the latest parent code:
    1. git checkout dev-guanaja
    2. git pull origin dev-guanaja
    
       Update all the submodules to the commits specified in `git submodule status`:
    3. git submodule update --init --recursive


TASK: Add a new child submodule to a parent project
---------------------------------------------------

       Start in root:
    0. cd /c/dev/sopro/Cambrian-src
    
       Get the latest parent code:
    1. git checkout dev-guanaja
       git pull origin dev-guanaja
    
       Confirm that you do not have the new child submodule yet:
    2. git submodule status
       
       Add the NEW submodule:
    3. git submodule add https://github.com/SocietyPro/html5-chat-log.git
    
       Verify the parent project knows about the new submodule:
    4. git status 
       >> "new file:   html5-chat-log"
       git submodule status
       >> " 34160ab391bcddecdb02a6f5c548846e49e21155 html5-chat-log (heads/master)"
       
    Caution! By default a submodule points at head/master. 
    This means that whenever you check out the submodule you'll get the latest version.
    Many times, this risks breaking your or someone else's future development.
    It's usually better to lock in a specific commit of the submodule. You can change it later.
    
       Choose what commit of the child repo you want to include in the parent:
    5. cd html5-chat-log          # Change to submodule directory
       git log -n 1               # See commit history
       git checkout 34160ab391    # specify by commit hash
                                  # or,
       git checkout 0.2.0         # specify by commit tag
       
       Change from the child folder to the parent folder:
    6. cd ..       
    
       Add the new submodule reference to the commit staging area:
    7. git add .gitmodules html5-chat-log
    
       Commit the new submodule reference into the PARENT repo:
    8. git commit -m 'Added html5-chat-log at latest master'


TASK: Change an EXISTING submodule (child repo) to point to a new  commit
-------------------------------------------------------------------------

       Start in root:
    0. cd /c/dev/sopro/Cambrian-src
    
       Confirm that you DO have the child submodule already:
    1. git submodule status
    
       Update all the submodules to the commits specified in `git submodule status`:
    2. git submodule update --init --recursive
    
       Change to the submodule directory:
    3. cd html5-chat-log
    
       Find your desired new commit:
    4. git log   
    
       Checkout whatever commit you'd like to have in the parent repo:
    5. git checkout 0.2.0
    
       Change from the child folder to the parent folder:
    6. cd ..
    
       Add the new submodule reference to the commit staging area:
    7. git add .gitmodules html5-chat-log
    
       COMMIT the change into the parent repo:
    8. git commit -m 'Use new version 0.2.0 of html5-chat-log'