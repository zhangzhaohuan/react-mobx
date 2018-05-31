import { observable, computed, autorun, action, configure, runInAction } from 'mobx'
import { queryTest } from 'common/axios/axios.js'
configure({ enforceActions: true });
class Test {
  @observable data;
  constructor(){
    this.data = [1,2];
  }
  @computed get getDataLength() {
    return this.data.length
  }
  // getlength = computed((() => {
  //   return this.data.length
  // }))
  // disposer = autorun(() => console.log(this.getlength.get()));
  @action queryTest = async (params) => {
    const data = await queryTest();
    runInAction(()=>{
      this.data = data.data;
      console.log(data);
    })
  }

  // @computed get getListData () {
  //   if (this.checked) {
  //     return this.todoData
  //   } else {
  //     let val = []
  //     this.todoData.forEach(el => {
  //       if (el.status) {
  //         val.push(el)
  //       }
  //     })
  //     return val
  //   }
  // }
  // @computed get setLeftStyle () {
  //   if (this.checked) {
  //     return {
  //       background: 'rgba(150, 150, 150, 0.5)'
  //     }
  //   } else {
  //     return {

  //     }
  //   }
  // }
  // @computed get setRightStyle () {
  //   if (!this.checked) {
  //     return {
  //       background: 'rgba(150, 150, 150, 0.5)'
  //     }
  //   } else {
  //     return {

  //     }
  //   }
  // }

  // @action.bound handlerChange (event) {
  //   this.defaultVal = event.target.value
  // }
  // @action.bound addTodo (event) {
  //   if (event.keyCode === 13) {
  //     var data = {
  //       'data': event.target.value
  //     }
  //     this.todoData.push(data);
  //     this.defaultVal = ''
  //   } else {
  //     return false
  //   }
  // }
  // @action.bound handerToggleLeft () {
  //   this.checked = true
  // }
  // @action.bound handerToggleRight () {
  //   this.checked = false
  // }
}

let test = new Test()
export default test 