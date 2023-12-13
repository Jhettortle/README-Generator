// PACKAGES NEEDED FOR THIS APPLICATION
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// CREATE QUESTIONS FOR USER INPUT
inquirer.prompt([
    {
        type:'input',
        message:"What is your GitHub username?",
        name:'github',
        // VALIDATE PROPERTY TO CHECK THAT USER PROVIDED A VALUE
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type:'input',
        message:'What is your email address?',
        name: 'email',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'name',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'project',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {   // LIST OF LICENSE'S
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Who would you like to credit?',
        name: 'credit',
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
    },
])
.then(({
    github,
    email,
    name,
    project,
    license,
    installation,
    test,
    credit
})=>{
    // TEMPLATE TO BE USED
    const template =`# ${name}
    
    * [Installation](#installation)
    * [Usage](#project)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    ## Usage
    ${project}
    ### instructions
    ${test}
    ## Credits
    ${credit}
    ## License
    ${license}
    
    # Contact
    * GitHub : ${github}
    * Email : ${email}`;
    
    // FUNCTION TO CREATE README USING FS
    createNewFile(name,template);
}
);

//CREATING OUR CREATEDNEWFILE FUNCTION
function createNewFile(fileName,data){
    // FS
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}

//NOW LETS INSTALL OUR PACKAGES! >:D

