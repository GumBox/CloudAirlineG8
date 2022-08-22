import axios from "axios";
import React from "react";


const AXIOS_API_DB_URL = " http://localhost:8080/api/branches"


class Axios{
    getAllBranches(stringSearch){
        var text = "";
        if(stringSearch!=""){
            text="?branchName="+stringSearch;
        }

        return axios.get(AXIOS_API_DB_URL+text);
    }

    addNewBranch(branch){
        return axios.post(AXIOS_API_DB_URL, branch);
    }

    getBranchById(branch){
        return axios.get(AXIOS_API_DB_URL + '/' + branch);
    }

    updateBranch(branchId, branch){
        return axios.put(AXIOS_API_DB_URL+ '/' + branchId, branch);
    }

    deleteBranch(branch){
        return axios.delete(AXIOS_API_DB_URL + '/' + branch);
    }

    getBranchIdBiggerAvg(){
        return axios.get(AXIOS_API_DB_URL+"/getIdBigger");
    }

    getIdBiggerAvg(){
        return axios.get(AXIOS_API_DB_URL+"/getIdBiggerAvg");
    }
}

export default new Axios();