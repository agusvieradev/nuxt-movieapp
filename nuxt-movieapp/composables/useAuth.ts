const useAuth = () => {
    const auth: Ref<boolean> = useState(() => false);
    const login = async (email: string, password: string) => {
        const userLogIn: { [key: string]: string } = {
            email,
            password,
        };
        const { data: user } = await useFetch(`http://127.0.0.1:8000/auth`, {
            method: "POST",
            body: userLogIn
        });
        const userData: any = toRaw(user.value);
        if (userData && userData != "Wrong password") {
            auth.value = true;
            useRouter().push("/");
        }
    };

    const logout = () => {
        auth.value = false;
        useRouter().push("/login");
    };

    return {
        auth,
        login,
        logout
    };
};
export default useAuth;