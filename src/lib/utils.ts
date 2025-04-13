const baseURL = process.env.NEXT_PUBLIC_API_URL;

const getUsers = () => {
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

const getUserByCode = () => {
  var userCode = 0;
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/users/getUser${userCode}`)
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

const deleteUser=(userCode)=>{
  fetch(`${baseURL}deleteUser/${userCode}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getAccounts = () => {
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

const getAccountByCode = () => {
  var accountCode = 0;
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/accounts/getAccount${accountCode}`)
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

const deleteAccount=(accountId)=>{
  fetch(`${baseURL}/deleteAccount/${accountId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getBank=()=>{
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

const getBankByCode=(bankCode)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`${baseURL}/getBank${bankCode}`).then((response)=>{
      return response.json();
    }).then((bank)=>{
      resolve(bank);
    }).catch((error)=>{
      reject(error);
    })
  });
  return promise;
}


const deleteBank=(bankId)=>{
  fetch(`${baseURL}/deleteBank/${bankId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getLoans = () => {
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

const getLoanByCode = (loanId) => {
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


const deleteLoan=(loanId)=>{
  fetch(`${baseURL}/deleteLoan/${loanId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getTransaction = () => {
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

const getTransactionByCode = (transactionCode) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/transactions/getTransaction${transactionCode}`)
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


const deleteTransaction=(transactionId)=>{
  fetch(`${baseURL}/deleteTransaction/${transactionId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getCategory = () => {
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

const getCategoryByCode = (categoryCode) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/categories/getCategory${categoryCode}`)
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


const deleteCategory=(categoryId)=>{
  fetch(`${baseURL}/deleteCategory/${categoryId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const getSubCategories = () => {
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

const getSubCategoriesByCode = (subCategoriesCode) => {
  var promise = new Promise((resolve, reject) => {
    fetch(`${baseURL}/getSubCategory${subCategoriesCode}`)
      .then((response) => {
        return response.json();
      })
      .then((subCategory) => resolve(subCategory))
      .catch((error) => reject(error));
  });
  return promise;
};


const deleteSubCategory=(subCategoryId)=>{
  fetch(`${baseURL}/deleteSubCategory/${subCategoryId}`).then((response)=>{
    return response;
  }).catch((error)=>{
    return error;
  });
}

const editSubCategory=(sbData)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`/editSubCategory${data}`).then((response)=>{
      return response.json();
    }).then((sbOutData)=>{
      resolve(sbOutData);
    }).catch((error)=>{
      rejects(error);
    });
  });
}

const editCategory=(categoryData)=>{
  var promise=new Promise((resolve,reject)=>{
    fetch(`/editCategory${data}`).then((response)=>{
      return response.json();
    }).then((categoryOutData)=>{
      resolve(categoryOutData);
    }).catch((error)=>{
      rejects(error);
    });
  });
}
