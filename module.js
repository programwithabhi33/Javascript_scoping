// This is the module file you can access another file variables that are not modules and if these file are modules then they must be export that variables to access in this file
import { exportVar } from './moduleExport.js'

/* You can access exportVar variable because the moduleExport.js file has the module file and this file exported this variable and you imported this variable that's why you can access this variable */

console.log(exportVar)

/* You can access varaible a because variable is defined in the global.js file and this file is not a module if it is then you need to export a variable to access here with import */

console.log(a)

// You cannot access firstVar variable because moduleExport file not exported the firstVar variable
// console.log(firstVar)

