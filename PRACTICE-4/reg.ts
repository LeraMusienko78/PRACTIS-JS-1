//  reg/avt

let switcher : boolean = true;

while (switcher === true){
    const userChoose : string = prompt (
        "Сhoose an action \n1)Registration \n2)Auth \n3)Quit "
    );

    let userName;
    let userEmail;
    let userPassword;

    // if(userChoose === "1"){

    // }else if (userChoose === "2"){

    // }else if (userChoose === "3"){


    //     switcher = false;

    // }else{
    //     console.error ("Error...")
    // }

    switch(userChoose){
        case  "1":

        userName = prompt("Enter name")
        userEmail = prompt ("Enter email")
        userPassword = prompt ("Enter password")

        console.log(`${userName} was successfully added to data base`);

            break;

        case "2:":

            break;

        case "3":

        switcher = false;
            break;
    }
    console.error("Error...");
    
}