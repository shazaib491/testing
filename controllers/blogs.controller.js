const Blogs = require("./../models/blog");

exports.getData = async (request, response) => {
    try {
        const blogs = await Blogs.find();
        response.status(200).json({ message: "blog Fetched", blogs: blogs, error: 0 })
    } catch (error) {
        response.status(505).json({ message: "Failed to fetch", error: 1 })
    }
}


exports.saveData = async (request, response) => {
    const obj = {title: request.body.title,body: request.body.body}
    try {
        const savedBlog = await Blogs.create(obj);
        response.status(201).json({message: "Blog Saved Successfully"})
    } catch (error) {
        response.status(505).json({message: "Failed to fetch",error: 1})
    }

}

exports.editData = async (request, response) => {
    const id = request.params.id;
    try {
        const singleBlog = await Blogs.find({ _id: id });
        response.status(201).json({message: "Blog get Successfully",blog: singleBlog})
    } catch (error) {
        res.status(505).json({message: "Failed to fetch",error: 1})
    }
}

exports.updateData = (request, response) => {
    const id = request.params.id;
    // Blogs.findByIdAndUpdate({ _id: id }, { title: request.body.title, body: request.body.body }, (error, success) => {
    //     if (error) {
    //         throw error;
    //     } else {
    //         response.status(201).json({
    //             message: "Post Updated",
    //             blogs: success
    //         })
    //     }

    // })
    Blogs.findByIdAndUpdate({ _id: id }, { title: request.body.title, body: request.body.body }).then(success => {
        response.status(201).json({
            message: "Post Updated",
            blogs: success
        })
    }).catch(error => {
        res.status(505).json({
            message: "Failed to fetch",
            error: 1
        })
    })
}

exports.deleteData = async (request, response) => {
    const id = request.params.id;
    try {
        const deletedBlog = await Blogs.findByIdAndDelete({ _id: id });
        response.status(200).json({message: "Record Deleted",blogArr: success})
    } catch (error) {
        res.status(505).json({message: "Failed to fetch",error: 1})
    }

}








// const Blogs = require("./../models/blog");

// exports.getData = async (request, response) => {
//     //    using callback
//     // Blogs.find((error, success) => {
//     //     if (error) {
//     //         throw error;
//     //     } else {
//     //         response.status(200).json({
//     //     message: "blog Fetched",
//     //     blogs: success,
//     //     error: 0
//     // }) 
//     //     }
//     // })


//     // Blogs.find().then(success => {
//     //     response.status(200).json({
//     //         message: "blog Fetched",
//     //         blogs: success,
//     //         error: 0
//     //     })
//     // }).catch(error => {
//     //     console.log(error);
//     //     response.status(505).json({
//     //         message: "Failed to fetch",
//     //         error: 1
//     //     })
//     // })

//     try {
//         const blogs = await Blogs.find();
//         response.status(200).json({
//             message: "blog Fetched",
//             blogs: blogs,
//             error: 0
//         })
//     } catch (error) {
//         response.status(505).json({
//             message: "Failed to fetch",
//             error: 1
//         })
//     }

// }


// exports.saveData = async (request, response) => {
//     const obj = {
//         title: request.body.title,
//         body: request.body.body
//     }
//     // Blogs.create(obj, (error, success) => {
//     //     if (error) {
//     //         throw error;
//     //     } else {
//     //         response.status(201).json({
//     //             message: "Blog Saved Successfully"
//     //         })
//     //     }
//     // })
//     // Blogs.create(obj).then(success => {
//     //     response.status(201).json({
//     //         message: "Blog Saved Successfully"
//     //     })
//     // }).catch(error => {
//     //     response.status(505).json({
//     //         message: "Failed to fetch",
//     //         error: 1
//     //     })
//     // })
//     try {
//         const savedBlog = await Blogs.create(obj);
//         response.status(201).json({
//             message: "Blog Saved Successfully"
//         })
//     } catch (error) {
//         response.status(505).json({
//             message: "Failed to fetch",
//             error: 1
//         })
//     }

// }

// exports.editData = async (request, response) => {
//     const id = request.params.id;
//     // const elements = Blogs.find({ _id: id }, (error, success) => {
//     //     if (error) {
//     //         throw error;
//     //     } else {
//     //         response.status(201).json({
//     //             message: "Blog get Successfully",
//     //             blog: success
//     //         })
//     //     }
//     // });

//     // Blogs.find({ _id: id }).then(success => {
//     //     response.status(201).json({
//     //         message: "Blog get Successfully",
//     //         blog: response
//     //     })
//     // }).catch(error => {
//     //     res.status(505).json({
//     //         message: "Failed to fetch",
//     //         error: 1
//     //     })
//     // })
//     try {
//         const singleBlog = await Blogs.find({ _id: id });
//         response.status(201).json({
//             message: "Blog get Successfully",
//             blog: singleBlog
//         })
//     } catch (error) {
//         res.status(505).json({
//             message: "Failed to fetch",
//             error: 1
//         })
//     }

// }

// exports.updateData = (request, response) => {
//     const id = request.params.id;
//     // Blogs.findByIdAndUpdate({ _id: id }, { title: request.body.title, body: request.body.body }, (error, success) => {
//     //     if (error) {
//     //         throw error;
//     //     } else {
//     //         response.status(201).json({
//     //             message: "Post Updated",
//     //             blogs: success
//     //         })
//     //     }

//     // })
//     Blogs.findByIdAndUpdate({ _id: id }, { title: request.body.title, body: request.body.body }).then(success => {
//         response.status(201).json({
//             message: "Post Updated",
//             blogs: success
//         })
//     }).catch(error => {
//         res.status(505).json({
//             message: "Failed to fetch",
//             error: 1
//         })
//     })
// }


// exports.deleteData = async (request, response) => {
//     const id = request.params.id;
//     // Blogs.findByIdAndDelete({ _id: id }, (error, success) => {
//     //     if (error) {
//     //         throw error;
//     //     } else {
//     //         response.status(200).json({
//     //             message: "Record Deleted",
//     //             blogArr: success
//     //         })
//     //     }
//     // })
//     // Blogs.findByIdAndDelete({ _id: id }).then((success) => {
//     //     response.status(200).json({
//     //         message: "Record Deleted",
//     //         blogArr: success
//     //     })
//     // }
//     // ).catch(error => {
//     //     res.status(505).json({
//     //         message: "Failed to fetch",
//     //         error: 1
//     //     })
//     // })
//     try {
//         const deletedBlog = await Blogs.findByIdAndDelete({ _id: id });
//         response.status(200).json({
//             message: "Record Deleted",
//             blogArr: success
//         })
//     } catch (error) {
//         res.status(505).json({
//             message: "Failed to fetch",
//             error: 1
//         })
//     }

// }