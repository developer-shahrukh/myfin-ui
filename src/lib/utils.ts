const baseURL=process.env.NEXT_PUBLIC_API_URL;

const getUsers=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch(`${baseURL}/users/getUsers`).then((response)=>{
            return response.json();
        }).then((users)=>{
            resolve(users);
        }).catch((error)=>{
            reject(error);
        });
    });
}

const getUserByCode=()=>{
    var userCode=0;
    var promise=new Promise((resolve,reject)=>{
        fetch(`${baseURL}/users/getUser${userCode}`).then((response)=>{
            return response.json();
        }).then((user)=>{
            resolve(user);
        }).catch((error)=>{
            reject(error);
        });
    });
}

const getAccounts=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch(`${baseURL}/accounts/getAccounts`).then((response)=>{
            return response.json();
        }).then((accounts)=>{
            resolve(accounts);
        }).catch((error)=>{
            reject(error);
        });
    });
}


const getAccountByCode=()=>{
    var accountCode=0;
    var promise=new Promise((resolve,reject)=>{
        fetch(`${baseURL}/accounts/getAccount${accountCode}`).then((response)=>{
            return response.json();
        }).then((account)=>{
            resolve(account);
        }).catch((error)=>{
            reject(error);
        });
    });
}

const getLoan=()=>{
    var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/loans/getLoan`).then((response)=>{
        return response.json()
    }).then((loan)=>{
        resolve(loan);
    }).catch((error)=> {
        reject(error);
    });
});
}

