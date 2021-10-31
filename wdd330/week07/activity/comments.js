//
//
//
class CommentModel {
  constructor(type) {
    this.type = type;

    this.comments = readFromLS(this.type) || [];
  }
  //
  //
  getComments(q = null) {
    if (q === null) {
      return this.comments;
    } else {
      //
      return this.comments.filter((el) => el.name === q);
    }
  }
  //
  addComment(postName, comment) {
    const newComment = {
      name: postName,
      comment: comment,
      date: new Date().getTime(),
    };
    this.comments.push(newComment);
    writeToLS(this.type, this.comment);
  }
}
//
function writeToLS(key, data) {
  //
  window.localStorage.setItem(key, JSON.stringify(data));
}
//
function readFromLS(key) {
  //
  return JSON.parse(window.localStorage.getItem(key));
}
//
//
const commentUI = `<div class="addComment">
  <h2>Add a comment</h2>
  <input type="text" id="commentEntry" />
  <button id="commentSubmit">Comment</button>
  </div>
  <h2>Comments</h2>
  <ul class="comments"></ul>`;
//
//
//
function renderCommentList(element, comments) {
  //
  element.innerHTML = "";
  //
  comments.forEach((el) => {
    let item = document.createElement("li");
    item.innerHTML = `
      ${el.name}: ${el.comment}
      `;
    //
    element.appendChild(item);
  });
}
//
//
//
class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
  }
  //
  addSubmitListener(postName) {
    //
    document.getElementById("commentSubmit").ontouchend = () => {
      //
      this.model.addComment(
        postName,
        document.getElementById("commentEntry").value
      );
      document.getElementById("commentEntry").value = "";
      this.showCommentList(postName);
    };
  }
  //
  showCommentList(q = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if (!parent) throw new Error("comment parent not found");
      //
      if (parent.innerHTML === "") {
        parent.innerHTML = commentUI;
      }
      if (q !== null) {
        //
        document.querySelector(".addComment").style.display = "block";
        this.addSubmitListener(q);
      } else {
        //
        document.querySelector(".addComment").style.display = "none";
      }
      //
      let comments = this.model.getComments(q);
      if (comments === null) {
        //
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Comments;
