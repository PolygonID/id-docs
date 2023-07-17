/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  guides: [
    {
      type: 'html',
      value: 'Guides',
      className: 'sidebar-title',
    },
    "introduction",
    {
      type: "category",
      label: "Issuer",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "guides/issuer/overview",
        "guides/issuer/issuer-demo",
        "guides/issuer/custom-schema",
      ],
    },
    {
      type: "category",
      label: "Verifier",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "guides/verifier/overview",
        "guides/verifier/demo-verifier",
        {
          type: "category",
          label: "Off-chain Verification",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "guides/verifier/off-chain-verification",
            "guides/verifier/verifier-setup",
            {
              type: "category",
              label: "API",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "guides/verifier/config",
                "guides/verifier/request-api",
                "guides/verifier/verification-api",
              ],
            },
          ],
        },
        "guides/verifier/on-chain-verification",
        "guides/verifier/zk-query-language",
      ],
    },
    {
      type: "category",
      label: "Wallet",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "guides/wallet/overview",
      ],
    },
    "smart-contracts"
  ],

  nodes: [
    {
      type: 'html',
      value: 'Issuer Node',
      className: 'sidebar-title',
    },
    "node/overview",
    "node/id-integration",
    {
      type: "category",
      label: "Issuer Node API",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "node/identity-apis",
        "node/claim-apis",
        "node/agent-apis",
      ],
    },
  ],

  sdk: [
    {
      type: 'html',
      value: 'Polygon ID SDK',
      className: 'sidebar-title',
    },
    "wallet-sdk/overview",
    "wallet-sdk/flutter-sdk",
    "wallet-sdk/install-polygonid-sdk",
    "wallet-sdk/example-app",
    "wallet-sdk/proof/proof-generation-api",
    {
      type: "category",
      label: "Identity Wallet",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "wallet-sdk/identity/identity-wallet",
        {
          type: "category",
          label: "API",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "wallet-sdk/identity/backup-identity",
            "wallet-sdk/identity/get-did-identifier",
            "wallet-sdk/identity/get-identity",
            "wallet-sdk/identity/get-identities",
            "wallet-sdk/identity/remove-identity",
            "wallet-sdk/identity/restore-identity",
            "wallet-sdk/identity/sign",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Credential Wallet",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "wallet-sdk/credential/overview",
        {
          type: "category",
          label: "API",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "wallet-sdk/credential/fetch-and-save",
            "wallet-sdk/credential/get-claims",
            "wallet-sdk/credential/update-claims",
            "wallet-sdk/credential/remove-claims",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Iden3comm Protocol",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "wallet-sdk/iden3comm/overview",
        "wallet-sdk/iden3comm/auth-requests",
        "wallet-sdk/iden3comm/jwz",
        {
          type: "category",
          label: "API",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "wallet-sdk/iden3comm/authenticate",
            "wallet-sdk/iden3comm/get-proofs",
            "wallet-sdk/iden3comm/get-vocabulary",
            "wallet-sdk/iden3comm/get-iden3-msg",
          ],
        },
      ],
    },
  ],
};