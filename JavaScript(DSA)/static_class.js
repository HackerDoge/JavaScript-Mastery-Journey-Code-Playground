class Calculator 
                {
				constructor(num1, num2) {  // Constructor used for initializing the class instance
					/* Properties initialized in the constructor */
					this.num1 = num1;
					this.num2 = num2;
				}
	
				/* static method */
				static display() 
                {
					console.log("This is a calculator app");
				}
	
				/* Methods of the class used for performing operations */
				add()
                {
					return this.num1 + this.num2;
				}
	
				subtract() 
                {
					return this.num1 - this.num2;
				}
			}
	
			/*static method display() is invoked using class name directly. */
			Calculator.display(); 
    