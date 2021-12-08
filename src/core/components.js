//получает компонент по id 

export class Components {
    constructior (id){
        this.$el = document.querySelector(id)
        //нужен для каждого отдельного компонента; БУДЕТ ВЫЗЫВАТЬСЯ ПОЗЖЕ
        this.init()
    }
    //инициализация/вызов
    init()
    hide(){
        this.$el.classList.add('hide');
    }
    show() {
        this.$el.classList.add('show');
    }
}