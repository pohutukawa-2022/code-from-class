# Testing Asynchronous Callbacks
Working with asynchronous JavaScript
# Agenda
### Demo    
- Test structure for callbacks
- done() function

### Takeaways
- Async assertions live inside the callback
- We need to tell Jest when we’re done()

The main takeaway is to make your assertions inside the callback. It makes sense because inside the callback is the only place you can make assertions about what the async function returns.

