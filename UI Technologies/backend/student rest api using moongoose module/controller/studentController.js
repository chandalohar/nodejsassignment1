let studentModel = require("../model/studentModel");


let storeStudentInfo = async (request,response)=> {
    let student = request.body;
    //console.log(student);
    //response.send("done");
    try{
    let result  = await studentModel.insertMany(student);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

let findAllStudents = async(request,response)=> {
    try {
        let result = await studentModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let findStudentById = async (reqeust,response)=> {
    try {
        let sid = reqeust.params._id;
        let result = await studentModel.find({_id:sid});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

let updateStudentGrade = async (reqeust,response)=> {
    let student = reqeust.body;
    try{
        let result  = await studentModel.updateOne({_id:student._id},{grade:student.grade})
        //response.send(result);
        if(result.modifiedCount>0){
            response.send("Your grade updated successfully")
        }else if(result.matchedCount>0){
            response.send("Your old grade and new grade is same")
        }else {
            response.send("Student not present");
        }
        }catch(ex){
            response.send(ex);
        }    
}

let deleteStudentById = async (reqeust,response)=> {
    try {
        let sid = reqeust.params._id;
        let result = await studentModel.deleteOne({_id:sid})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Student details deleted successfully")
        }else {
            response.send("Student not present")
        }
    } catch (error) {
        response.json(error);
    }
}
//1.	find student using grade 
let findStudentByGrade = async (reqeust,response)=> {
    try {
        let studentgrade = reqeust.params.grade;
        let result = await studentModel.find({grade:studentgrade});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//2. find student using class 
let findStudentByClass = async (reqeust,response)=> {
    try {
        let studentclass = reqeust.params.class;
        let result = await studentModel.find({class:studentclass});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//3.	find student using address 
let findStudentByAddress = async (reqeust,response)=> {
    try {
        let studentaddress = reqeust.params.address;
        let result = await studentModel.find({address:studentaddress});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

//4.	update student address 
let updateStudentAddress = async (reqeust,response)=> {
    let student = reqeust.body;
    try{
        let result  = await studentModel.updateOne({_id:student._id},{address:student.address})
        //response.send(result);
        if(result.modifiedCount>0){
            response.send("Your address updated successfully")
        }else if(result.matchedCount>0){
            response.send("Your old address and new address is same")
        }else {
            response.send("Student not present");
        }
        }catch(ex){
            response.send(ex);
        }    
}

//5.	update student class 
let updateStudentClass = async (reqeust,response)=> {
    let student = reqeust.body;
    try{
        let result  = await studentModel.updateOne({_id:student._id},{class:student.class})
        //response.send(result);
        if(result.modifiedCount>0){
            response.send("Your class updated successfully")
        }else if(result.matchedCount>0){
            response.send("Your old class and new class is same")
        }else {
            response.send("Student not present");
        }
        }catch(ex){
            response.send(ex);
        }    
}




// 6.	update student grade (done by sir already)




// 7.	delete student using grade 
let deleteStudentByGrade = async (reqeust,response)=> {
    try {
        let stdgrade = reqeust.params.grade;
        let result = await studentModel.deleteOne({grade:stdgrade})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Student details deleted successfully via student grade = "+stdgrade)
        }else {
            response.send("Student not present")
        }
    } catch (error) {
        response.json(error);
    }
}



// 8.	delete student using class 

let deleteStudentByClass = async (reqeust,response)=> {
    try {
        let stdclass = reqeust.params.class;
        let result = await studentModel.deleteOne({class:stdclass})
        //response.json(result);
        if(result.deletedCount>0){
            response.send("Student details deleted successfully via student class = "+stdclass)
        }else {
            response.send("Student not present")
        }
    } catch (error) {
        response.json(error);
    }
}






module.exports = {storeStudentInfo,findAllStudents,findStudentById,updateStudentGrade,deleteStudentById,findStudentByGrade,
findStudentByClass,findStudentByAddress,updateStudentAddress,updateStudentClass,deleteStudentByGrade,deleteStudentByClass};


