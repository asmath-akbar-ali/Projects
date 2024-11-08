        const passwordBox=document.getElementById("Password");
        const length = 12;

        const UC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const LC="abcdefghijklmnopqrstuvwxyz";
        const num="0123456789";
        const sym="~!@#$%^&*()_+={}[:;'<>?/|\\-']"

        const all = UC+LC+num+sym;

        function createPassword(){
            let password="";
            password += UC[Math.floor(Math.random() * UC.length)];
            password += LC[Math.floor(Math.random() * LC.length)];
            password += num[Math.floor(Math.random() * num.length)];
            password += sym[Math.floor(Math.random() * sym.length)];
            
            while(length>password.length){
                password += all[Math.floor(Math.random() * all.length)];
            }
            passwordBox.value=password;
        }

        function copyPassword(){
            passwordBox.select();
            document.execCommand("copy");
        }
