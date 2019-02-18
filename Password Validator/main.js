let validate = () => {
    let input1 = document.getElementById('password-f1').value;
    let input2 = document.getElementById('password-f2').value;
    console.log(input1, ', ' , input2)

    if((input1.length < 8 || input2.length < 8) && (input1 !== input2)) {
        alert("Passwords do not match\nPassword(s) do not meet 8 character minimum");
    } else if(input1.length < 8 || input2.length < 8) {
        alert("Password(s) do not meet 8 character minimum");
    } else if(input1 !== input2) {
        alert("Passwords do not match")
    }
}