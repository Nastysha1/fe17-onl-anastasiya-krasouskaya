import { Components } from "../core/components";

export class HeaderComponents extends Components {
  constructor(id) {
    super(id);
  }
  init() {
    const BTN = this.$el.querySelector("js-header-start");
    BTN.addEventListener("click", buttonHandler.bind(this));
  }
}
// приватная функция - это функция, отвечающая за одно действие, является недоступной(доступна только для этого документа)
function buttonHandler() {
  this.hide();
}
