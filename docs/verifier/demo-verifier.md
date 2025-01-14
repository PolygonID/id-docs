---
id: demo-verifier
title: Verifier
sidebar_label: Demo Verifier
description: Quick start for demo verification.
keywords:
  - docs
  - polygon id
  - ID holder
  - verifier
  - demo
  - query
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Demo Verifier

The [Demo Verifier](https://verifier-demo.polygonid.me/) is a playground that allows you to create queries based on a specific credential, generate a QR code based on that query and let the user scan the QR code to generate a zero-knowledge proof with which the query should be satisfied.

## Prerequisites

Download the Polygon ID Wallet App and create an Identity.

- For Android: <a href="https://play.google.com/store/apps/details?id=com.polygonid.wallet" target="_blank">Polygon ID on Google Play</a>
- For iOS: <a href="https://apps.apple.com/us/app/polygon-id/id1629870183" target="_blank">Polygon ID on the App Store</a>
- Have the queried credential inside your wallet. For the tutorial, we are using the `ProofOfDaoLongevity` that can be created via <a href="https://user-ui:password-ui@issuer-ui.polygonid.me">the Issuer Node UI testing environment</a>.

## Quick Start

1. On the Demo Verifier website click on the drop-down menu and then **Custom**

   <div align="center">
   <img src={useBaseUrl("/img/verifier-demo-1.png")} align="center" width="500"/>
   </div>
   <br></br>

   Click on **Sign In**.

2. Create the query via the editor.

   The editor allows you to design the query that the user will have to satisfy. The query is created by selecting the credential type and the attribute that you want to query. More info on how to design a query is described via the [ZK Query Language](./verification-library/zk-query-language.md).

   In this example, we are querying the date of entry of the user inside a DAO. In particular, we want to make sure that the user joined the DAO before a specific date.
   This query is based on the `ProofOfDaoLongevity` credential type described by this [JSON-LD Context](https://github.com/0xPolygonID/tutorial-examples/blob/main/credential-schema/proof-of-dao-longevity.jsonld).

   <div align="center">
   <img src={useBaseUrl("/img/verifier-demo-2.png")} align="center" width="500"/>
   </div>
   <br></br>

   Then click **Submit**.

3. The query is then converted into a QR code that can be scanned by the user.

   <div align="center">
   <img src={useBaseUrl("/img/verifier-demo-3.png")} align="center" width="250"/>
   </div>
   <br></br>

   Once scanning the QR code with the Polygon ID app, the user will be prompted to generate a zero-knowledge proof that attests that the query is satisfied without revealing any further information about the credential. For example, the user's entry date to the DAO is never revealed to the verifier.
