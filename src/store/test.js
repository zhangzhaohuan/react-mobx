import { observable, computed, autorun, action, configure, runInAction } from 'mobx'
import { queryTest } from 'common/axios/axios.js'
configure({ enforceActions: true });
class Test {
  @observable data = [];
  @observable name = 1;
  @observable age = 1;

  disposer = autorun(() => console.log(this.data))
  // @autorun(() => console.log(this.name))
  @computed get getDataLength() {
    console.log(this.data.length);
    return this.data.length
  }
  @computed get getAge() {
    console.log(this.age > 1);
    return this.age > 1
  }
  // getlength = computed((() => {
  //   // console.log(this.data.length);
  //   return this.data.length
  // }))

  @action queryTest = async (params) => {
    const data = await queryTest(params);
    console.log(data.data);

    runInAction(() => {
      this.data = this.data.concat(data.data);
      this.age = this.age + 1;
      console.log(this.data.length);
      console.log(this.age);

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