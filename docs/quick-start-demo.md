---
id: quick-start-demo
title: Quick Start Demo
sidebar_label: Quick Start Demo
description: A quick demonstration of Polygon ID's main features.
keywords:
  - docs
  - polygon id
  - ID holder
  - issuer
  - verifier
  - wallet
  - credential
  - schema
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This tutorial is a quick demonstration of some of Polygon ID's main functionalities. To illustrate how Polygon ID works, we will walk you through some of its products and tools by following along a simple POAP use case.
POAP stands for Proof of Attendance Protocol, which is used to prove that someone has taken part in a given event.

This guide will briefly touch on the 3 roles of the [Triangle of Trust](introduction.md#core-concepts-of-polygon-id-verifiable-credentials-identity-holder-issuer-and-verifier), namely the Identity Holder, the Issuer and the Verifier. For that, we will take the case of an individual who needs to prove that they were able to participate in a particular event.

These are the steps we will cover in this article:

1. [Set up a Polygon ID wallet](#set-up-a-polygon-id-wallet)
2. [Issue a new credential to attest to the ID Holder's attendance to the event](#issue-a-new-credential-to-attest-to-the-id-holders-event-attendance)
3. [Fetch the newly created credential](#fetch-the-newly-created-credential)
4. [Verify the credential validity](#verify-the-id-holder-credential)

## Set up a Polygon ID wallet

As an Identity Holder, the individual who wants to have a credential to prove his age, for example, will need an application that can hold their credentials. In our case, we will be using the Polygon ID Wallet.

:::note

You can also use any Polygon ID compatible wallet. Please, check our [<ins>Ecosystem page</ins>](https://marketplace.polygonid.me/ecosystem) for other options.

:::

To get started with the Polygon ID Wallet, download the Polygon ID Wallet App and create an Identity:

- For Android: <a href="https://play.google.com/store/apps/details?id=com.polygonid.wallet" target="_blank">Polygon ID on Google Play</a>
- For iOS: <a href="https://apps.apple.com/us/app/polygon-id/id1629870183" target="_blank">Polygon ID on the App Store</a>

:::note

Polygon ID wallet is an implementation of the Wallet SDK, as a way of showcasing its possibilities. Head to [<ins>the Polygon ID SDK documentation</ins>](./wallet/wallet-sdk/polygonid-sdk/polygonid-sdk-overview.md) to know more about how it works.

:::

The process from downloading to creating an identity on the Polygon ID Wallet is just as it is shown below. You need to download the app, create a wallet, set up a PIN number and the wallet is ready to be used.

"Mumbai" is selected instead of "Polygon Main".

<div align="center">
    <img src={useBaseUrl("img/quick-start-demo/quick-start-demo-wallet.png")}></img>
</div>

:::caution

This demo is using Polygon's Mumbai testnet. Go to the gear icon at the top right and ensure "Polygon Mumbai" is selected instead of "Polygon Main".

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/settings-mumbai.jpeg")}></img>
</div>

:::

## Issue a new credential to attest to the ID Holder's event attendance

A trusted entity, for instance, a private institution will now play the role of an issuer. It will be responsible for creating the credential and sending it to the ID Holder.

We are using <a href="https://user-ui:password-ui@issuer-ui.polygonid.me">the Issuer Node UI testing environment</a> to manage credentials. This is the place where the trusted entity can create credentials, manage schemas and generate connections.

However, if you are using a new credential type, you actually need to create a schema for that credential, which basically is the set of JSON files that gather all the attributes of that specific credential.

To facilitate this issuance process, we have already created the credential schema whose URLs are the following:

- JSON schema URL
  `ipfs://QmTSwnuCB9grYMB2z5EKXDagfChurK5MiMCS6efrRbsyVX`
- JSON-LD Context
  `ipfs://QmdH1Vu79p2NcZLFbHxzJnLuUHJiMZnBeT7SNpLaqK7k9X`

:::note

To learn how to set up your own issuer environment by deploying an issuer node, visit the [<ins>Issuer section in the documentation</ins>](./issuer/issuer-overview.md).

:::

:::info

The schema used in this demo was built using the Polygon ID Schema Builder and is available on [<ins>the Polygon ID Schema Explorer</ins>](https://schema-builder.polygonid.me/schemas/1fa99457-b2ae-4884-ae12-d658bd6abf69). Learn more about creating new schemas on [<ins>the Schema Builder UI guide</ins>](https://devs.polygonid.com/docs/issuer/schema-builder/).

:::

### Issue the credential

With the new schema in hand, the issuer should now be able to generate a credential.

1. First, go to the <a href="https://user-ui:password-ui@issuer-ui.polygonid.me">the Issuer Node UI testing environment</a>.

   :::warning

   This Issuer Node is publicly available and used only for testing purposes. Do not use personal or sensitive data. All data is deleted every 48 hours.

   :::

2. Now you need to import the schema. Click on **Import Schema** and paste our previously generated schema IPFS address `ipfs://QmTSwnuCB9grYMB2z5EKXDagfChurK5MiMCS6efrRbsyVX`:

   <div align="center">
       <img width="100%" src={useBaseUrl("img/quick-start-demo/import-schema.png")}></img>
   </div>

   You may preview the schema and then Import it.

3. You can go ahead and click on **Issue Credential** in the top righ-hand corner. Choose **Credential Link** on the next page and your schema on the dropdown menu ("POAP01", in our case). For this credential, we are providing a proof of attendance to an event in Paris:

<div align="center">
    <img width="500" src={useBaseUrl("img/quick-start-demo/create-credential.png")}></img>
</div>

4. After you click on **Create Credential Link**, you can also click on **View Link** on the next screen to check the generated QR code.

<div align="center">
    <img width="500" src={useBaseUrl("img/quick-start-demo/qr-code.png")}></img>
</div>

## Fetch the newly created credential

Now we are back to the ID Holder role. They will use their mobile application to authenticate themselves by scanning the QR code generated by the issuer in the last step.

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/quick-fetch-1.jpeg")}></img>
</div>

Connect to the issuer:

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/quick-fetch-2.jpeg")}></img>
</div>

This will instantly trigger a notification on the mobile which will look like this:

<div align="center">
    <img width="300" src={useBaseUrl("/img/quick-start-demo/quick-notification.jpeg")}></img>
</div>

Accept the credential:

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/quick-fetch-4.jpeg")}></img>
</div>

The ID Holder successfully retrieved the credential and it is visible on the app:

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/quick-fetch-6.jpeg")}></img>
</div>

## Verify the ID holder credential

Here comes the third role in this tutorial: the verifier. This could be represented by an organization that needs to check the accuracy of someone's credentials. In our use case, this organization wants to verify whether the ID holder actually attended our made-up Paris event.

Here are the steps to verify the credential:

1. Visit the [Verifier website](https://verifier-demo.polygonid.me/). As we are using a newly-created credential type, you need to choose **Custom** on the dropdown menu. Click on **Sign In**.

<div align="center">
    <img width="600" src={useBaseUrl("img/quick-start-demo/verifier-lp.png")}></img>
</div>

2. Now you will again make use of the JSON-LD URL we have also provided: `ipfs://QmdH1Vu79p2NcZLFbHxzJnLuUHJiMZnBeT7SNpLaqK7k9X`. Here is how the query should look like:

<div align="center">
    <img width="600" src={useBaseUrl("img/quick-start-demo/verifier-query.png")}></img>
</div>

3. After clicking on **Submit**, you should scan the resulting QR code and follow the instructions on the mobile app.

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/verifier-request.jpeg")}></img>
</div>

4. The process of generating the proof is then started:

<div align="center">
    <img width="300" src={useBaseUrl("img/quick-start-demo/verifier-proof.jpeg")}></img>
</div>

5. And finally, the proof will be validated by the Verifier.

:::info

This was a quick demonstration of Polygon ID's basic functionalities. However, Polygon ID is far more complex than this. It offers a range of SSI-focused tools that allow for decentralized identity and verifiable credentials management.

:::
