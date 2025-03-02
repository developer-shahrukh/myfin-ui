
export const deleteAccount=()=>{
    return {success:true,error:false};
}
export const deleteUser=()=>{
    return {success:true,error:false};
}
export const deletePayment=()=>{
    return {success:true,error:false};
}
export const deleteBank=()=>{
    return {success:true,error:false};
}
export const deleteLoan=()=>{
    return {success:true,error:false};
}
export const deleteTransaction=()=>{
    return {success:true,error:false};
}


export const createAccount=(data)=>{
    return {success:true,error:false};
}
export const updateAccount=(data)=>{
    return {success:true,error:false};
}

const getUsers=()=>{
    var promise=new Promise((resolve,reject)=>{
        fetch(`/getUsers`).then((response)=>{
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
        fetch(`/getUser${userCode}`).then((response)=>{
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
        fetch(`/getAccounts`).then((response)=>{
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
        fetch(`/getAccount${accountCode}`).then((response)=>{
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
    fetch(`/getLoan`).then((response)=>{
        return response.json()
    }).then((loan)=>{
        resolve(loan);
    }).catch((error)=> {
        reject(error);
    });
});
}