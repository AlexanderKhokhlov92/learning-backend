// @desc   Auth user
// @Route  Post/api/users/login
// @access Public

export const authUser = async (req, res) => {
	res.json({ message: 'You are authenticated' })
}
