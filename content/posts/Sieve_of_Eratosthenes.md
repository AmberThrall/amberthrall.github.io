+++
date = '2022-01-18T11:37:09-07:00'
draft = false
title = 'Prime number generation'
+++

A **prime number** $n$ is an integer greater than 1 such that it's only divisors are 1 and $n$. While this may seem like a uninteresting property, prime numbers turn out to be very important
to cryptography. Most cryptography implementations work by using the prime factors of large numbers, requiring the prime factors to decrypt the data.

One interesting exercise is that in prime number generation. We will go over two methods, a slow brute force method, and a much faster algorithm known as **sieve of Eratosthenes**.

## Slow Method

One simple method of generating all primes from 2 to $n$, is to brute force it by simply checking each number.

```python
def is_prime(n):
    for x in range(2, int(n/2)):
        if n % x == 0:
            return False

    return True

def slow_method(n):
    return list(filter(lambda x: is_prime(x), range(2, n + 1)))
```

In the above code, we generate a list of integers 2, 3, ..., $n$. Then for each integer, we determine if it has a divisor other than 1 or itself. If so we remove it from the list.

As we will see later on, this is a terribly slow method to use.

## Sieve of Eratosthenes

The sieve of Eratosthenes is an algorithm dating all the way back to the 2nd century (it first appeared in Nicomachus of Gerasa's *Introduction to Arithmetic*[^first]) and is still one of the most efficient methods
of generating prime numbers.

To find all primes from 2 to $n$, one can use the following algorithm:
1. Create a list of integers from 2 to $n$.
2. Let $p$ equal 2.
3. Mark off multiples of $p$ from $2p$ to $n$ from the list.
4. Let $p$ be the smallest number in the list greater than $p$. If no such number exists, the remaining numbers are prime. If such a $p$ does exist, repeat step 3.

Converting this algorithm into Python results in the following code:

```python
def sieve(n):
    a = dict(zip(range(2, n + 1), [True] * (n-1)))

    for p in range(2, n):
        if a[p]:
            for i in range(2 * p, n + 1, p):
                a[i] = False

    return [ i for i in a if a[i] ]
```

You can further optimize this algorithm by marking off the numbers $p^2$, $p^2+p$, $p^2+2p$, etc. in step 3.

## Comparisons

Using both methods, I generated all primes between 2 and 1,000,000. The slow method took approximately 774 seconds, where as the sieve method took approximately 0.57 seconds. 
In terms of big-O notation, our slow method is $O(n^2)$ where as the sieve is $O(n\log\log n)$.

## References

[^first]: Sieve of Erathosthenes. In *Wikipedia*.
    https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
