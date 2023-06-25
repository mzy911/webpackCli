import jQuery from "jquery"
import _ from "lodash"
import pkg1 from "@mzy123/pkg1"
import pkg2 from "@mzy123/pkg2"


console.log("调用jquery文件", jQuery("#box"))
console.log("pkg1", pkg1())
console.log("pkg2", pkg2())


const form = _.cloneDeep({
  a: "bb"
})
console.log("newForm", form)



export default {}
