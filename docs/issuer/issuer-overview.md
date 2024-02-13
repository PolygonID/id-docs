---
id: issuer-overview
title: Issuer Overview
sidebar_label: Overview
description: Definition of an Issuer.
keywords:
  - docs
  - polygon id
  - issuer
  - claim
  - verifiable credentials
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An Issuer is any identity holder that issues Verifiable Credentials (to itself or to other identity holders). You can think of a credential as a statement or an attestation: something an Issuer says about another subject. For example, when a university (Issuer) claims that a student (subject) has a degree (credential).

Other examples of issuers are:

- A DAO that issues “membership credentials" to its members.
- A Government that issues National Identity documents to its citizens.
- A Face detection Machine Learning application that issues "prooved human" credentials.
- An employer that certifies that its employees work for the company.

:::info

[<ins>Verifiable Credentials</ins>](https://www.w3.org/TR/vc-data-model/) are a flexible data format able to express any type of information so that developers can unleash their creativity.

:::

# Operating an issuer

There are some different ways one can perform issuer-related actions, that is, manage and issue credentials, establish connections with holders etc. These are the currently available options:

- Running an [Issuer Node](/docs/issuer/issuer-core) directly in your infrastructure.

- Utilizing the issuer node available in the[ Google Cloud Marketplace](https://console.cloud.google.com/marketplace/product/polygon-public/polygon-id-issuer-node?pli=1) (soon available also on the AWS Marketplace).

- Adapting the [JS SDK](/docs/js-sdk/js-sdk-overview.md) to your application that issues credentials.

- Using [SaaS vendors](https://marketplace.polygonid.me/ecosystem) that leverage Polygon ID solutions.

- Making use of Polygon ID smart contracts for [on-chain issuance](/docs/issuer/on-chain-issuer/on-chain-overview.md/).

## Issuer Nodes

To operate, an Issuer must run an Issuer Node, which is a self-hosted Node that exposes all the functionalities necessary to run an issuer.

<div align="center">
<img src= {useBaseUrl("img/issuer-intro.png")} align="center" />
</div>
<br></br>

Once deployed, there are two ways to work with the issuer node:

- Issuer Node Core API
- Issuer Node UI

<div align="center">
<img src= {useBaseUrl("img/whole-infra.png")} align="center" />
</div>

### Issuer Node Core API

The [Issuer Node Core API](issuer-core.md) is the recommended way of using the issuer node, since the creation of credentials will most likely be part of a bigger application flow (e.g. face scanning and document verification). Once the issuer has completed the process to verify the information that give the user the right to the credential, the issuer node API can be invoked to produce the credential offering (that can be fetched by the user through the Polygon ID compatible Wallets).

The Issuer Node Core API allows to operate through multiple identifiers (DID's). This means that the organization operating the Issuer Node can use different DID to issue the credentials.

<div align="center">
<img src= {useBaseUrl("img/3001.png")} align="center" />
</div>

### Issuer Node UI

The [Issuer Node UI](issuer-node-ui.md) provides the full experience of having an Issuer Node with all its capabilities. Although it offers only a single identity, it also presents a few extra features, such as establishing connections and importing schemas. The UI is recommended for the initial setup and testing. It's perfect for proof of concept when some steps have to be done manually. It can also help organizations that issue credentials at the end of a manual verification process.  

Issuer Node User Interface with a more visual experience:

<div align="center">
<img src= {useBaseUrl("img/8088.png")} align="center" />
</div>

:::info

[<ins>The Demo Issuer</ins>](https://issuer-ui.polygonid.me/) allows you to test the Issuer Node UI without installations. The information in that server is deleted every 48 hours and no private data should be stored in the credentials.

:::


<div align="center">
<img src= {useBaseUrl("img/3002.png")} align="center" />
</div>
