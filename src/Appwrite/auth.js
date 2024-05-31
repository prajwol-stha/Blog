import config from "../Config/config";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // return userAccount;
                //call another method
                return this.login({email,password})
            }
            else{
                return 
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            // throw error;
            console.log("Appwrite service::getCurrentUSer::error",error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions(); 
        } catch (error) {
            console.log("Appwrite service::logout::error",error);
        }
    }
}

const authService=new AuthService();

export default AuthService