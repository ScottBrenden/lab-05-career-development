// 'ues strict';
//
// const List = module.exports = function() {
//   for(let key in arguments) {
//     this[key] = arguments[key];
//   }
//   this.length = arguments.length;
// };
//
// // O(n)
// List.prototype.copy = function() {
//   let result = new List();
//   for(let key in this) {
//     result[key] = this[key];
//   }
//   return result;
// };
//
// // O(n)
// List.prototype.push = function(value) {
//   let result = this.copy();
//   result[result.length++] = value;
//   return result;
// };
//
// // O(n)
// List.prototype.pop = function() {
//   let result = this.copy();
//   delete result[--result.length];
//
//   return {
//     value: this[this.length - 1],
//     list: result,
//   };
// };
//
// List.prototype.forEach = function(cb){
//   for (let i=0; i<this.length; i++){
//     cb(this[i], i, this);
//   }
// };
//
// List.prototype.filter = function(cb){
//   let result = [];
//   for (let i=0; i<this.length; i++){
//     if(cb(this[i], i, this)){
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
//
// List.prototype.map = function(cb){
//   let result = this.copy();
//   for (let i=0; i<this.length; i++){
//     cb(this[i], i, this);
//   }
//   return result;
// };
//
// List.prototype.reduce = function(cb){
//   let result;
//   for (let i=0; i<this.length; i++){
//     result = result + cb(this[i], i, this);
//   }
//   return result;
// };
