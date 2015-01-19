# Code Review Checklist  
  
## General Items  
[ ] The code works  
[ ] All functions and variables have meaningful names  
[ ] Conforms to Society Pro coding conventions  
[ ] It is DRY code  
[ ] It is as modular as possible  
[ ] No unneccesary global variables  
[ ] No commented out code  
[ ] Loops have a set length and correct termination conditions  
[ ] No candidates for replacement with library functions  
[ ] No extraneous logging or debugging code  
  
## Model View Controller  
[ ] No SQL calls from controllers or views  
[ ] Controllers are separated from views  
[ ] Inputs are validated in the controller  
[ ] No business logic in views  
  
## Security  
[ ] All data are inputs checked (for the correct type, length, format, and range)  
[ ] Returning errors from third-party sources are being caught  
[ ] Output values checked and encoded  
[ ] Invalid parameter values are handled  
  
## Documentation  
[ ] Comments exist and describe the intent of the code  
[ ] All functions commented  
[ ] Unusual behavior or edge-case handling is described  
[ ] The use and function of third-party libraries is documented  
[ ] Data structures and units of measurement are explained  
[ ] No incomplete code  
  
## Testing  
[ ] The code is testable  
[ ] Tests exist and are comprehensive  
[ ] Unit tests actually test that the code is performing the intended functionality  
[ ] GUI tests are used only when unit testing is impossible  
[ ] Acceptance test steps are defined and match the gherkin syntax  