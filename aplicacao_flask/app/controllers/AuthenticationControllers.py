class AuthenticationController:
    
    def login(form):
        print("O usuario {} fez o login, lembrar={}".format(
            form.username.data,
            form.remember_me.data
        ))
        return True