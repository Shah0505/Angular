angular.module("mainapp",[])
	.controller("listCtrl",function($scope){
		var self=this;
        
		self.todo_data;
		self.data=[];
		self.show_todo=false;
		$scope.done;

		// to add items to list
		self.add_to_do=function(){
			
			if (self.todo_data !== "")
			{	self.show_todo=true;
				self.data.push(self.todo_data);
				self.todo_data="";

			}

			//to delete particualr checked item
		self.delete_todo=function(index){
			self.data.splice(index,1);
		}
		}
	})