const Nav = [
  {
    label: 'Getting Started',
    items: [
      { name: 'Supabase Flutter Library', url: '/reference/dart', items: [] },
      { name: 'Installing', url: '/reference/dart/installing', items: [] },
      { name: 'Initializing', url: '/reference/dart/initializing', items: [] },
      { name: 'Upgrading to supabase-flutter v1', url: '/reference/dart/upgrade-guide', items: [] },
    ],
  },
  {
    label: 'Auth',
    items: [
      { name: 'signUp()', url: '/reference/dart/auth-signup', items: [] },
      {
        name: 'signInWithPassword()',
        url: '/reference/dart/auth-signinwithpassword',
        items: [],
      },
      { name: 'signInWithOtp()', url: '/reference/dart/auth-signinwithotp', items: [] },
      { name: 'signInWithOAuth()', url: '/reference/dart/auth-signinwithoauth', items: [] },
      { name: 'signOut()', url: '/reference/dart/auth-signout', items: [] },
      { name: 'verifyOtp()', url: '/reference/dart/auth-verifyotp', items: [] },
      { name: 'currentSession', url: '/reference/dart/auth-currentsession', items: [] },
      { name: 'currentUser', url: '/reference/dart/auth-currentuser', items: [] },
      { name: 'updateUser()', url: '/reference/dart/auth-updateuser', items: [] },
      { name: 'onAuthStateChange()', url: '/reference/dart/auth-onauthstatechange', items: [] },
      {
        name: 'resetPasswordForEmail()',
        url: '/reference/dart/auth-resetpasswordforemail',
        items: [],
      },
    ],
  },
  {
    label: 'Functions',
    items: [{ name: 'invoke()', url: '/reference/dart/invoke', items: [] }],
  },
  {
    label: 'Database',
    items: [
      { name: 'Fetch data: select()', url: '/reference/dart/select', items: [] },
      { name: 'Create data: insert()', url: '/reference/dart/insert', items: [] },
      { name: 'Modify data: update()', url: '/reference/dart/update', items: [] },
      { name: 'Upsert data: upsert()', url: '/reference/dart/upsert', items: [] },
      { name: 'Delete data: delete()', url: '/reference/dart/delete', items: [] },
      { name: 'Stored Procedures: rpc()', url: '/reference/dart/rpc', items: [] },
      {
        name: 'Filters',
        url: undefined,
        items: [
          { name: 'Using Filters', url: '/reference/dart/using-filters', items: [] },
          { name: 'eq()', url: '/reference/dart/eq', items: [] },
          { name: 'neq()', url: '/reference/dart/neq', items: [] },
          { name: 'gt()', url: '/reference/dart/gt', items: [] },
          { name: 'gte()', url: '/reference/dart/gte', items: [] },
          { name: 'lt()', url: '/reference/dart/lt', items: [] },
          { name: 'lte()', url: '/reference/dart/lte', items: [] },
          { name: 'like()', url: '/reference/dart/like', items: [] },
          { name: 'ilike()', url: '/reference/dart/ilike', items: [] },
          { name: 'is_()', url: '/reference/dart/is_', items: [] },
          { name: 'in_()', url: '/reference/dart/in_', items: [] },
          { name: 'contains()', url: '/reference/dart/contains', items: [] },
          { name: 'containedBy()', url: '/reference/dart/containedby', items: [] },
          { name: 'rangeGt()', url: '/reference/dart/rangegt', items: [] },
          { name: 'rangeGte()', url: '/reference/dart/rangegte', items: [] },
          { name: 'rangeLt()', url: '/reference/dart/rangelt', items: [] },
          { name: 'rangeLte()', url: '/reference/dart/rangelte', items: [] },
          { name: 'rangeAdjacent()', url: '/reference/dart/rangeadjacent', items: [] },
          { name: 'overlaps()', url: '/reference/dart/overlaps', items: [] },
          { name: 'textSearch()', url: '/reference/dart/textsearch', items: [] },
          { name: 'match()', url: '/reference/dart/match', items: [] },
          { name: 'not()', url: '/reference/dart/not', items: [] },
          { name: 'or()', url: '/reference/dart/or', items: [] },
          { name: 'filter()', url: '/reference/dart/filter', items: [] },
        ],
      },
      {
        name: 'Modifiers',
        url: undefined,
        items: [
          { name: 'Using Modifiers', url: '/reference/dart/using-modifiers', items: [] },
          { name: 'order()', url: '/reference/dart/order', items: [] },
          { name: 'limit()', url: '/reference/dart/limit', items: [] },
          { name: 'range()', url: '/reference/dart/range', items: [] },
          { name: 'single()', url: '/reference/dart/single', items: [] },
        ],
      },
    ],
  },
  {
    label: 'Realtime',
    items: [
      { name: 'stream()', url: '/reference/dart/stream', items: [] },
      { name: 'on().subscribe()', url: '/reference/dart/subscribe', items: [] },
      { name: 'removeChannel()', url: '/reference/dart/removechannel', items: [] },
      { name: 'removeAllChannels()', url: '/reference/dart/removeallchannels', items: [] },
      { name: 'getChannels()', url: '/reference/dart/getchannels', items: [] },
    ],
  },
  {
    label: 'Storage',
    items: [
      { name: 'createBucket()', url: '/reference/dart/storage-createbucket', items: [] },
      { name: 'getBucket()', url: '/reference/dart/storage-getbucket', items: [] },
      { name: 'listBuckets()', url: '/reference/dart/storage-listbuckets', items: [] },
      { name: 'updateBucket()', url: '/reference/dart/storage-updatebucket', items: [] },
      { name: 'deleteBucket()', url: '/reference/dart/storage-deletebucket', items: [] },
      { name: 'emptyBucket()', url: '/reference/dart/storage-emptybucket', items: [] },
      { name: 'from.upload()', url: '/reference/dart/storage-from-upload', items: [] },
      { name: 'from.download()', url: '/reference/dart/storage-from-download', items: [] },
      { name: 'from.list()', url: '/reference/dart/storage-from-list', items: [] },
      { name: 'from.update()', url: '/reference/dart/storage-from-update', items: [] },
      { name: 'from.move()', url: '/reference/dart/storage-from-move', items: [] },
      { name: 'from.remove()', url: '/reference/dart/storage-from-remove', items: [] },
      {
        name: 'from.createSignedUrl()',
        url: '/reference/dart/storage-from-createsignedurl',
        items: [],
      },
      {
        name: 'from.getPublicUrl()',
        url: '/reference/dart/storage-from-getpublicurl',
        items: [],
      },
    ],
  },
]

export default Nav
