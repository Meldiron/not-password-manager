import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();

appwrite
    .setEndpoint('https://appwrite.matejbaco.eu/v1')
    .setProject('notPasswordManager');

export const AppwriteService = {
    async signUp(email: string, password: string) {
        await appwrite.account.create('unique()', email, password);
    },
    async signIn(email: string, password: string) {
        await appwrite.account.createSession(email, password);
    },
    async signOut() {
        await appwrite.account.deleteSession('current');
    },
    async isSignedIn() {
        try {
            await appwrite.account.get();
            return true;
        } catch(err) {
            console.warn(err);
            return false;
        }
    }
}