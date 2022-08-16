## Testing the Data Layer

# Agenda

* Hi
* Code demo
* What problems did we run into?
* Takeaways




# What problems did we run into?

* Tests on live database contaminate the data (eg, running a read test after a write test)
* Tests on live database can take a long time



# Takeaways

* Tests should use an in-memory database for speed
* Acheive this using dependency injection