package main

import (
	"fmt"
	"html/template"
	"net/http"
	_ "net/smtp"
)

func errorHandler(w http.ResponseWriter, r *http.Request, status int) {
	w.WriteHeader(status)
	if status == http.StatusNotFound {
		fmt.Fprint(w, "custom 404")
	}
}

func index(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		errorHandler(w, r, http.StatusNotFound)
		return
	}
	tmpl, _ := template.ParseFiles("../web/template/barabinsk/index.html")
	tmpl.Execute(w, nil)
}

func tariffs(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/tariffs" {
		errorHandler(w, r, http.StatusNotFound)
		return
	}
	tmpl, _ := template.ParseFiles("../web/template/barabinsk/tariffs.html")
	tmpl.Execute(w, nil)
}

func contacts(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/contacts" {
		errorHandler(w, r, http.StatusNotFound)
		return
	}
	tmpl, _ := template.ParseFiles("../web/template/barabinsk/contacts.html")
	tmpl.Execute(w, nil)
}

func news(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/news" {
		errorHandler(w, r, http.StatusNotFound)
		return
	}
	tmpl, _ := template.ParseFiles("../web/template/barabinsk/news.html")
	tmpl.Execute(w, nil)
}

func newUser(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.Form["name"])
	fmt.Fprintln(w, r.Form)
}
func main() {
	http.HandleFunc("/", index)
	http.HandleFunc("/tariffs", tariffs)
	http.HandleFunc("/contacts", contacts)
	http.HandleFunc("/news", news)
	http.HandleFunc("/new_user", newUser)
	http.Handle("/res/", http.StripPrefix("/res/", http.FileServer(http.Dir("../web/"))))
	server := &http.Server{
		Addr: "localhost:80",
	}
	server.ListenAndServe()
}
