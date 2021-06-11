"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Interface = exports.domainType = exports.metaTransactionType = exports.ERC20_ABI = exports.PAYMENT_ABI = void 0;
exports.PAYMENT_ABI = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'u',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'e',
                type: 'address',
            },
            {
                internalType: 'uint256[]',
                name: 'slabAmounts_',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'slabPercents_',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'b',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'p',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'ChangeOwner',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'user',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'feeCharged',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'feeWithoutDiscount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'escrow',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'providerQuote',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'providerCharged',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'provider',
                type: 'string',
            },
        ],
        name: 'ChargeWithProvider',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'user',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'feeCharged',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'feeWithoutDiscount',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'escrow',
                type: 'address',
            },
        ],
        name: 'ChargeWithoutProvider',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Paused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address[]',
                name: 'managers',
                type: 'address[]',
            },
        ],
        name: 'RemoveManagers',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address[]',
                name: 'managers',
                type: 'address[]',
            },
        ],
        name: 'SetManagers',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Unpaused',
        type: 'event',
    },
    {
        inputs: [],
        name: 'buildTimeRate',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'r',
                type: 'uint256',
            },
        ],
        name: 'changeBuildTimeRate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'o',
                type: 'address',
            },
        ],
        name: 'changeOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'u',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'b',
                type: 'uint256',
            },
        ],
        name: 'charge',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'u',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'b',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'd',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'providerQuote',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'providerCharged',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'provider',
                type: 'string',
            },
        ],
        name: 'chargeWithProvider',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'disableDiscounts',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'discountSlabs',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'percent',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'discountsEnabled',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 's',
                type: 'address',
            },
        ],
        name: 'enableDiscounts',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'escrow',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getManagers',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getUnderlyingPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'governanceAddress',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'managerByAddress',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'managers',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'm',
                type: 'address[]',
            },
        ],
        name: 'removeManagers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'g',
                type: 'address',
            },
        ],
        name: 'setGovernanceAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'm',
                type: 'address[]',
            },
        ],
        name: 'setManagers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stakingManager',
        outputs: [
            {
                internalType: 'contract IStaking',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'underlying',
        outputs: [
            {
                internalType: 'contract IERC20',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'slabAmounts_',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'slabPercents_',
                type: 'uint256[]',
            },
        ],
        name: 'updateDiscountSlabs',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'e',
                type: 'address',
            },
        ],
        name: 'updateEscrow',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'u',
                type: 'address',
            },
        ],
        name: 'updateToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 't',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'a',
                type: 'uint256',
            },
        ],
        name: 'withdrawERC20',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
exports.ERC20_ABI = [
    {
        type: 'constructor',
        stateMutability: 'nonpayable',
        inputs: [],
    },
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                type: 'address',
                name: 'owner',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'address',
                name: 'spender',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'uint256',
                name: 'value',
                internalType: 'uint256',
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'MetaTransactionExecuted',
        inputs: [
            {
                type: 'address',
                name: 'userAddress',
                internalType: 'address',
                indexed: false,
            },
            {
                type: 'address',
                name: 'relayerAddress',
                internalType: 'address payable',
                indexed: false,
            },
            {
                type: 'bytes',
                name: 'functionSignature',
                internalType: 'bytes',
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'RoleAdminChanged',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
                indexed: true,
            },
            {
                type: 'bytes32',
                name: 'previousAdminRole',
                internalType: 'bytes32',
                indexed: true,
            },
            {
                type: 'bytes32',
                name: 'newAdminRole',
                internalType: 'bytes32',
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'RoleGranted',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
                indexed: true,
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'address',
                name: 'sender',
                internalType: 'address',
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'RoleRevoked',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
                indexed: true,
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'address',
                name: 'sender',
                internalType: 'address',
                indexed: true,
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                type: 'address',
                name: 'from',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'address',
                name: 'to',
                internalType: 'address',
                indexed: true,
            },
            {
                type: 'uint256',
                name: 'value',
                internalType: 'uint256',
                indexed: false,
            },
        ],
        anonymous: false,
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'CHILD_CHAIN_ID',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes',
                name: '',
                internalType: 'bytes',
            },
        ],
        name: 'CHILD_CHAIN_ID_BYTES',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes32',
                name: '',
                internalType: 'bytes32',
            },
        ],
        name: 'DEFAULT_ADMIN_ROLE',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes32',
                name: '',
                internalType: 'bytes32',
            },
        ],
        name: 'DEPOSITOR_ROLE',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'string',
                name: '',
                internalType: 'string',
            },
        ],
        name: 'ERC712_VERSION',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'ROOT_CHAIN_ID',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes',
                name: '',
                internalType: 'bytes',
            },
        ],
        name: 'ROOT_CHAIN_ID_BYTES',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'allowance',
        inputs: [
            {
                type: 'address',
                name: 'owner',
                internalType: 'address',
            },
            {
                type: 'address',
                name: 'spender',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'approve',
        inputs: [
            {
                type: 'address',
                name: 'spender',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: 'amount',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'balanceOf',
        inputs: [
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint8',
                name: '',
                internalType: 'uint8',
            },
        ],
        name: 'decimals',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'decreaseAllowance',
        inputs: [
            {
                type: 'address',
                name: 'spender',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: 'subtractedValue',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'deposit',
        inputs: [
            {
                type: 'address',
                name: 'user',
                internalType: 'address',
            },
            {
                type: 'bytes',
                name: 'depositData',
                internalType: 'bytes',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'payable',
        outputs: [
            {
                type: 'bytes',
                name: '',
                internalType: 'bytes',
            },
        ],
        name: 'executeMetaTransaction',
        inputs: [
            {
                type: 'address',
                name: 'userAddress',
                internalType: 'address',
            },
            {
                type: 'bytes',
                name: 'functionSignature',
                internalType: 'bytes',
            },
            {
                type: 'bytes32',
                name: 'sigR',
                internalType: 'bytes32',
            },
            {
                type: 'bytes32',
                name: 'sigS',
                internalType: 'bytes32',
            },
            {
                type: 'uint8',
                name: 'sigV',
                internalType: 'uint8',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'pure',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'getChainId',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes32',
                name: '',
                internalType: 'bytes32',
            },
        ],
        name: 'getDomainSeperator',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: 'nonce',
                internalType: 'uint256',
            },
        ],
        name: 'getNonce',
        inputs: [
            {
                type: 'address',
                name: 'user',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bytes32',
                name: '',
                internalType: 'bytes32',
            },
        ],
        name: 'getRoleAdmin',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
        ],
        name: 'getRoleMember',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
            {
                type: 'uint256',
                name: 'index',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'getRoleMemberCount',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'grantRole',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'hasRole',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'increaseAllowance',
        inputs: [
            {
                type: 'address',
                name: 'spender',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: 'addedValue',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'initialize',
        inputs: [
            {
                type: 'string',
                name: 'name_',
                internalType: 'string',
            },
            {
                type: 'string',
                name: 'symbol_',
                internalType: 'string',
            },
            {
                type: 'uint8',
                name: 'decimals_',
                internalType: 'uint8',
            },
            {
                type: 'address',
                name: 'childChainManager',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'string',
                name: '',
                internalType: 'string',
            },
        ],
        name: 'name',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'renounceRole',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'revokeRole',
        inputs: [
            {
                type: 'bytes32',
                name: 'role',
                internalType: 'bytes32',
            },
            {
                type: 'address',
                name: 'account',
                internalType: 'address',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'string',
                name: '',
                internalType: 'string',
            },
        ],
        name: 'symbol',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'view',
        outputs: [
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
        ],
        name: 'totalSupply',
        inputs: [],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'transfer',
        inputs: [
            {
                type: 'address',
                name: 'recipient',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: 'amount',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        name: 'transferFrom',
        inputs: [
            {
                type: 'address',
                name: 'sender',
                internalType: 'address',
            },
            {
                type: 'address',
                name: 'recipient',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: 'amount',
                internalType: 'uint256',
            },
        ],
    },
    {
        type: 'function',
        stateMutability: 'nonpayable',
        outputs: [],
        name: 'withdraw',
        inputs: [
            {
                type: 'uint256',
                name: 'amount',
                internalType: 'uint256',
            },
        ],
    },
];
exports.metaTransactionType = [
    { name: 'nonce', type: 'uint256' },
    { name: 'from', type: 'address' },
    { name: 'functionSignature', type: 'bytes' },
];
exports.domainType = [
    {
        name: 'name',
        type: 'string',
    },
    {
        name: 'version',
        type: 'string',
    },
    {
        name: 'verifyingContract',
        type: 'address',
    },
    {
        name: 'salt',
        type: 'bytes32',
    },
];
exports.ERC20Interface = [
    'function totalSupply() external view returns (uint256)',
    'function balanceOf(address account) external view returns (uint256)',
    'function transfer(address recipient, uint256 amount) external returns (bool)',
    'function allowance(address owner, address spender) external view returns (uint256)',
    'function approve(address spender, uint256 amount) external returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)',
];
