Problem Description

A given filterPersons function that filters users based on their type (either 'user' or 'admin'). 
This task is to fix the typings for the filterPersons function in TypeScript so that it behaves as expected and handles filtering correctly based on the provided arguments.


Function Behavior:
The function should filter persons based on the type provided ('user' or 'admin').
When personType is 'user', the function should return an array of User[].
When personType is 'admin', the function should return an array of Admin[].


Criteria Object:
The criteria argument should accept a partial object of type User or Admin, based on the personType argument.
The criteria object should exclude the type property. It should not allow filtering by the type field.


Type Definitions:
Ensure that the function uses TypeScript's powerful type-checking system to handle partial types and return the appropriate arrays.
