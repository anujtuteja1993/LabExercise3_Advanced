const prompt=require("prompt-sync")({sigint:true}); 

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
askPassword('rockstar', 'test'); //cant get prompt to work.