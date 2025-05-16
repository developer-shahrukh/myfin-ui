const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/users/getUsers`)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        resolve(users);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getUserByCode = (userId:number) => {
    var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/users/getUser${userId}`)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const deleteUser=(userId:number)=>{
  fetch(`${baseURL}/deleteUser/${userId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getAccounts = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/accounts/getAccounts`)
      .then((response) => {
        return response.json();
      })
      .then((accounts) => {
        resolve(accounts);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getAccountByCode = (accountId:number) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/accounts/getAccount${accountId}`)
      .then((response) => {
        return response.json();
      })
      .then((account) => {
        resolve(account);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const deleteAccount=(accountId:number)=>{
  fetch(`${baseURL}/deleteAccount/${accountId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getBank=()=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/getBanks`).then((response)=>{
      return response.json();
    }).then((banks)=>{
      resolve(banks);
    }).catch((error)=>{
      reject(error);
    })
  });
  return promise;
}

export const getBankByCode=(bankId:number)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/getBank${bankId}`).then((response)=>{
      return response.json();
    }).then((bank)=>{
      resolve(bank);
    }).catch((error)=>{
      reject(error);
    })
  });
  return promise;
}


export const deleteBank=(bankId:number)=>{
  fetch(`${baseURL}/deleteBank/${bankId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getLoans = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/loans/getLoans`)
      .then((response) => {
        return response.json();
      })
      .then((loan) => {
        resolve(loan);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getLoanByCode = (loanId:number) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/loans/getLoan${loanId}`)
      .then((response) => {
        return response.json();
      })
      .then((loan) => {
        resolve(loan);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};


export const getLoanPayements=()=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/getLoanPayments`).then((response)=>{
      return response.json();
    }).then((loanPayments)=>{
      resolve(loanPayments);
    }).catch((error)=>{
      resolve(error);
    });
  });
  return promise;
}

export const getLoanPayment=(loanPaymentId:number)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/getLoanPayment/${loanPaymentId}`).then((response)=>{
      return response.json();
    }).then((loanPayment)=>{
      resolve(loanPayment);
    }).catch((error)=>{
      reject(error);
    });
  });
  return promise;
}

export const deleteLoan=(loanId:number)=>{
  fetch(`${baseURL}/deleteLoan/${loanId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getTransaction = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/transactions/getTransactions`)
      .then((response) => {
        return response.json();
      })
      .then((loan) => {
        resolve(loan);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getTransactionByCode = (transactionId:number) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/transactions/getTransaction${transactionId}`)
      .then((response) => {
        return response.json();
      })
      .then((loan) => {
        resolve(loan);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};


export const deleteTransaction=(transactionId:number)=>{
  fetch(`${baseURL}/deleteTransaction/${transactionId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getCategory = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/categories/getCategories`)
      .then((response) => {
        return response.json();
      })
      .then((categories) => {
        resolve(categories);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getCategoryByCode = (categoryId:number) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/categories/getCategory${categoryId}`)
      .then((response) => {
        return response.json();
      })
      .then((categories) => {
        resolve(categories);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};


export const deleteCategory=(categoryId:number)=>{
  fetch(`${baseURL}/deleteCategory/${categoryId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const getSubCategories = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/getSubCategories`)
      .then((response) => {
        return response.json();
      })
      .then((subCategories) => resolve(subCategories))
      .catch((error) => reject(error));
  });
  return promise;
};

export const getSubCategoriesByCode = (subCategoriesId:number) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/getSubCategory${subCategoriesId}`)
      .then((response) => {
        return response.json();
      })
      .then((subCategory) => resolve(subCategory))
      .catch((error) => reject(error));
  });
  return promise;
};


export const deleteSubCategory=(subCategoryId:number)=>{
  fetch(`${baseURL}/deleteSubCategory/${subCategoryId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

export const editSubCategory=(subCategoryData:any)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/editSubCategory${subCategoryData}`).then((response)=>{
      return response.json();
    }).then((sbOutData)=>{  
      resolve(sbOutData);
    }).catch((error)=>{
      reject(error);
    });
  });
}

export const editCategory=(categoryData:any)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/editCategory${categoryData}`).then((response)=>{
      return response.json();
    }).then((categoryOutData)=>{
      resolve(categoryOutData);
    }).catch((error)=>{
      reject(error);
    });
  });
}
