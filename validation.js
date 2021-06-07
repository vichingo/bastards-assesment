const personSchema = {
    name: 'string',
    age: 'number',
    siblings: 'array',
    metaData: 'object',
    active: 'boolean',
 };

 const personObj = {
    name: 'James',
    age: 23,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
 };

 const validate = (obj, schema) => {
    const objKeys = Object.keys(obj); 
    const schemaKeys = Object.keys(schema);

    const objValues = Object.values(obj);
    const schemaValues = Object.values(schema);

    if (objKeys.length !== schemaKeys.length) {
        let diff = schemaKeys.filter(x => !objKeys.includes(x)).toString();
        console.log(`Object mist de volgende velden: ${diff}`)
        return false;
      }

    for (let objKey of objKeys) {
      const objValueType = Object.prototype.toString.call(obj[objKey]).slice(8,-1).toLowerCase() ;
      const schemaValueType = schema[objKey];

      if (objValueType !== schemaValueType) {
        console.log(objValueType + ' is not ' +  schemaValueType);
        return false;
      }
    }
    return true;
 };

 validate(personObj, personSchema);