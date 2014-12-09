# Dev/Ops
Devops is everything that happens in between code being committed and users using the product.
## Windows
#### Prerequisites
To make a Windows installer, you need to first have:
1. Qt 5.3 and mingw 4.82
2. OpenSSL development libraries
  (installed either to default `C:\OpenSSL-Win32` or `Cambrian-src/sopro-cpp-dependencies/win32/OpenSSL-Win32`)  
  Note that you must rename one openssl file: 
  `"OpenSSL-Win32\lib\MinGW\ssleay32.a"` > `"OpenSSL-Win32\lib\MinGW\libssleay32.a"`
3. [NSIS](http://nsis.sourceforge.net/Main_Page)
4. Cambrian-src source code  
  `git clone --recursive https://github.com/SocietyPro/Cambrian-src.git`

If you have installed Qt or NSIS to non-default locations, or if you have different versions of Qt or mingw, you'll need to modify one or more of `scripts/build/build-windows.bat`, `scripts/dist/distribute-windows.bat`, `scripts/dist/make-windows-installer.nsi` to point to the right files.

#### `cmd` shell vs `git bash` shell
Note! The build and distribute batch files require the windows `cmd` command line. They will not work in git bash. If you are in git bash, simply type `cmd` to invoke a windows shell.

### Build with Qt Creator
* Open `sopro.pro` and `otx/projects/otx.pro` in Qt Creator.
* Open the project settings for `sopro.pro`. Choose an output directory that is not inside the Cambrian-src folder.
* Open the project settings for `otx.pro`. **Set the same output directory** as `sopro.pro`. Set **release mode**.
* Go back to the Edit window. Right click `otx.pro` and click **Set "otx" as Active Project**.
* Right click `otx.pro` again and click Build.
* After a successful otx build, right click `sopro.pro` and click **Set "sopro" as Active Project**. Set **release mode**.
* Right click `sopro.pro` again and click Build.

You now have SocietyPro.exe in the output folder.

### Build with command line
    cd Cambrian-src/scripts/build
    build-windows.bat
### Distribute Windows Binaries

Our Grunt distribution script does a number of tasks:
* Find version number
* Build installer
* Generate a json metadata file with hash
* Update current-releases.json and historical-releases.json
* Compile a new index.html

To begin using Grunt, install nodejs, then:

    npm install -g grunt-cli

#### Build Windows Installer + installer metadata into /releases

    cd ../dist
    npm install
    grunt build-installer

You're done! Your new installer is located at `Cambrian-src/releases/sopro-<version>.exe`.

#### Build Windows Installer + installer metadata + index.html

    cd ../dist
    npm install
    grunt

This likewise puts the installer at `Cambrian-src/releases/sopro-<version>.exe`.  
It also creates `index.html` in `Cambrian-src/scripts/dist/` suitable for uploading to Amazon S3.

#### Upload to S3 with Grunt
If you would like to put the new release on the internet,  
and you have `aws` and a set of ssh keys configured,  
then you can tell Grunt to upload the files with the following two commands:

    grunt upload-index
    grunt upload-release

#### Upload to S3 manually

    aws s3 cp index.html s3://download.societypro.org
    aws s3 cp c:\dev\src\sopro\Cambrian-src\releases\societypro-0.1.7.6.exe s3://download.societypro.org/releases/
    aws s3 cp c:\dev\src\sopro\Cambrian-src\releases\societypro-0.1.7.6.exe.json s3://download.societypro.org/releases/


## Linux
### Prerequisites
### Build with Qt creator

### Build with command line
### Distribute Linux Binaries

## Mac OSX 10.?
### Prerequisites
### Build with Qt creator
### Build with command line
### Distribute Mac DMG

## Automated Testing

* Fast builds 
  * unit/integration tests, runs in less than 5 minutes
  * notification is sent to the team lead and to developers having committed changes.
* Slow builds 
  * acceptance test builds, run after the fast builds 
  * notification is sent to team lead, testers, and developers having committed changes.
* Nightly builds 
  * QA metrics, performance tests, and so on
  * only run if the other builds work
  * status available to all team members
  * these provide a snapshot picture of project health before the daily scrum meeting.
