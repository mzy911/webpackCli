import jQuery from "jquery"
import _ from "lodash"
import pkg2 from "@mzy123/pkg2"


console.log("调用jquery文件", jQuery("#box"))
console.log("pkg2", pkg2)


const form = _.cloneDeep({
  a: "bb"
})
console.log("newForm", form)



export default {}
