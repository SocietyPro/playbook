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
### Build with command line
####Build SocietyPro.exe
    cd Cambrian-src/scripts/build
    build-windows.bat
### Distribute Windows Binaries
####Build Windows Installer
    cd ../dist
    distribute-windows.bat

You're done! Your new installer is located at `Cambrian-src/dist/sopro-0.1.7.4.exe`.

## Linux
### Prerequisites
### Build with Qt creator

### Build with command line
### Distribute Linux Binaries

## Mac OSX 10.?
### Prerequisites
### Build with Qt creator
### Build with command line

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
