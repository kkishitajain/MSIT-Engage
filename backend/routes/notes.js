const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');

//express validator
const { body, validationResult } = require('express-validator');

//importing notes model:
const Notes = require('../models/Notes');
const Users = require('../models/User');

//ROUTE1: fetch all notes: GET: /api/notes/fetchallnotes -login reqq
router.get('/fetchallnotes',async (req,res)=>{
    try {
        const notes=await Notes.find({});  //fetching all notes 
        res.json(notes);
    } catch (error) {
        res.status(500).send("Some error occured.");
    }
});

// apply on a note of the logged in user: GET: /api/notes/apply -login reqq
//id is company id
router.put('/apply/:id',fetchuser,async (req,res)=>{
    try {
        

        //adding the company id to the appliedto list of the user
        let user=await Users.findById(req.user.id); //user who is applying
        let brr=user.appliedTo;
        brr.push(req.params.id);
        user=await Users.findByIdAndUpdate(req.user.id,{appliedTo:brr});

        //adding the userid to the appliedusers list of company with id=id
        let note=await Notes.findById(req.params.id);  //fetching note whose id = id
        let arr=note.appliedUsers;
        arr.push(req.user.id);
        newNote={};
        newNote.appliedUsers=arr;
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});

        res.json(note);
    } catch (error) {
        console.log(error);
        res.status(500).send("error");
    }
});

// fetch all notes of the logged in user: GET: /api/notes/fetchapplied -login reqq
router.get('/fetchapplied',fetchuser,async (req,res)=>{
    try {
        const user=await Users.findById(req.user.id);  //fetching all notes whose id is rreq.user.id
        const arr=user.appliedTo;
        const brr=[]
        for(let i=0;i<arr.length;i++){
            let note=await Notes.findById(arr[i]);
            brr.push(note)
        }
        res.send(brr);
    } catch (error) {
        console.log(error);
        res.status(500).send("Some error occured.");
    }
});

// fetch all applicants: GET: /api/notes/fetchusers -login reqq
router.get('/fetchusers/:id',async (req,res)=>{
    try {
        const note=await Notes.findById(req.params.id);  //fetching all notes whose id is rreq.user.id
        const arr=note.appliedUsers;
        const brr=[]
        for(let i=0;i<arr.length;i++){
            let user=await Users.findById(arr[i]);
            brr.push(user);
        }
        res.send(brr);
    } catch (error) {
        res.status(500).send("Some error occured.");
    }
});

//ROUTE2: adding a new note: POST: /api/notes/addnote  --login reqq
router.post('/addnote',[
    body('title','Enter a valid title!').isLength({ min: 3 }),
    body('description','Enter a valid description!').isLength({ min: 5 })],
    async (req,res)=>{

    //if there are errorrs return errors array object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{

    //creating new note object:
    note=await Notes.create({
        c_id:req.body.c_id,
        title: req.body.title,
        description: req.body.description,
        ctc:req.body.ctc,
        deadline:req.body.deadline,
        location:req.body.location,
        role:req.body.role,
        cg:req.body.cg,
        tenth:req.body.tenth,
        twelfth:req.body.twelfth,
        branch:req.body.branch
      });
      res.json(note);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured.");
    }
});

//ROUTE3: updating note: PUT: /api/notes/updatenote:id  --login reqq
router.put('/updatenote/:id',
    async (req,res)=>{

    try{
    
    const {title,description,ctc,deadline,location,role,cg,tenth,twelfth,branch}=req.body;
    //creating new note object:
    newNote={};
    if(title){newNote.title=title;}
    if(description){newNote.description=description;}
    if(ctc){newNote.ctc=ctc;}
    if(deadline){newNote.deadline=deadline;}
    if(location){newNote.location=location;}
    if(role){newNote.role=role;}
    if(cg){newNote.cg=cg;}
    if(tenth){newNote.tenth=tenth;}
    if(twelfth){newNote.twelfth=twelfth;}
    if(branch){newNote.branch=branch;}
    
    //find the note to be updated and update it:
    let note=await Notes.findById(req.params.id);

    //check if note exists or not:
    if(!note){
        return res.status(404).send("Note not found");
    }


    //now note exists and user is corretc:
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json(note);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured.");
    }
});

//ROUTE4: deleting a  note: DELETE: /api/notes/deletenote/:id  --login reqq
router.delete('/deletenote/:id',
    async (req,res)=>{

    try{
    
    //find the note to be deleted and delete it:
    let note=await Notes.findById(req.params.id);
    
    //check if note exists or not:
    if(!note){
        return res.status(404).send("Note not found");
    }

    //now note exists and user is corretc:
    note=await Notes.findByIdAndDelete(req.params.id);
    res.send({"Success":"Note deleted successfully",note:note});

    // let user=await Users.findById(req.user.id);
    // applnote=await user.appliedTo.findByIdAndDelete(req.params.id);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Some error occured.");
    }
});

module.exports=router;