const prompt = require("prompt-sync")({sigint:true}); 

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
//askPassword('rockstar', 'test'); //cant get prompt to work. jo: it does now

//the two arguments to askPassword need to be functions, that tell it what to do if the pw matches or doesnt
askPassword(() => user.login(true), () => user.login(false));