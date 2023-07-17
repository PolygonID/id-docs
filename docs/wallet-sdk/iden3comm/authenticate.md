---
id: authenticate
title: Authenticate Identity with Issuer
sidebar_label: Authenticate
description: Iden3comm is the protocol that defines the set of rules and syntax of the data that needs to be communicated while interacting with an Issuer and a Verifier.
keywords:
  - docs
  - polygon id
  - holder
  - issuer
  - verifier
  - wallet sdk
---

An Integrator, in order to use the services of an Issuer, needs to authenticate itself with that Issuer. For this to happen, the Integrator needs to call the `authenticate()` method. 

The `authenticate()` method uses `Iden3MessageEntity`, `did`, `profileNonce`, `privateKey`, and an optional `pushToken` as input parameters.

```
Future<void> authenticate({
  required Iden3MessageEntity message,
  required String did,
  int? profileNonce,
  required String privateKey,
  String? pushToken
});
```

- `Iden3MessageEntity` is the iden3 message retrieved from the `getIden3Message()` method.

- `did` is the unique ID of the identity.

- `profileNonce` is the nonce of the profile of an identity.

- `privateKey` of the identity is a key that is used to access the sensitive information of the identity. This key is also used for generating proofs by using the credentials associated with the identity.

- `pushToken` lets an Integrator receive the iden3 messages through push notification.

## Steps

1. Retrieve `CircuitDataEntity` from the loadCircuitFiles. `CircuitDataEntity` are the circuits used for generating an authentication proof that we share with the Issuer with JWZ.

2. Retrieve iden3message by scanning the QR code and transform it into a string message with `getiden3message()` method. 

3. Get authToken from authenticate() and authenticate Identity with authToken.

### Wallet-Issuer Interaction using Authentication
 
An Integrator, to interact with an Issuer, needs to authenticate with it first. 
 
1.  On the Polygon ID app (which is based on SDK), an Integrator clicks **Connect**.

      ![](/img/polygonid-wallet-connect.png)
 
2.  The Issuer displays a QR code. The Integrator, using the app, scans this code.
 
      ![](/img/qr-code-scan.png)

3.  With this, the `Authenticate()` function (with the identifier, private key and message as the inputs) is executed. The function authenticates the Identity and sends the authentication information (in the form of a big encoded message based on JWZ) to the Issuer.
 
      ![](/img/jwz.png)
 
      > Read more on JWZ [here](jwz.md).
 
4. The Issuer receives the data sent by the Integrator and based on its correctness, authenticates or rejects the identity. The wallet analyzes this response from the Issuer.