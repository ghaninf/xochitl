export default function checkFormIsFill(input) {
  let isEmpty = false
  let typeValue = typeof ''
  Object.keys(input).forEach(key => {
    typeValue = typeof input[key]
    switch (typeValue) {
      case "boolean":
        if (input[key] === false) {
          isEmpty = true
        }
        break;
      case "number":
        if (input[key] === 0) {
          isEmpty = true
        }
        break;
      case "string":
        if (input[key] === "") {
          isEmpty = true
        }
        break;
      case "array":
        if (input[key].length > 0) {
          isEmpty = true
        }
        break;
      case "object":
        checkFormIsFill(input[key])
        break;
      default:
        return undefined
    }
  })

  return isEmpty
}