const db = require("../models");

class PostController {
  static async createPost(req, res) {
    const { title, content, userId } = req.body;

    try {
      const newPostCreate = await db.Post.create({ title, content, userId });

      return res.status(201).json(newPostCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePost(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
      const post = await db.Post.findByPk(id);

      if (!post) {
        return res.status(404).json({ message: "Post não encontrado." });
      }

      (post.title = title), (post.content = content), await post.save();

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPosts(req, res) {
    try {
      const { userId, order } = req.query;

      const orderOptions = [["createdAt", "DESC"]];
      if (order === "oldPosts") {
        orderOptions[0][1] = "ASC";
      }

      const whereOptions = {};
      if (userId) {
        whereOptions.userId = userId;
      }

      const allPosts = await db.Post.findAll({
        where: whereOptions,
        order: orderOptions,
        include: [
          {
            model: db.User,
            attributes: ["name", "email"],
          },
        ],
      });

      return res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getPostById(req, res) {
    const { id } = req.params;

    try {
      const post = await db.Post.findOne({
        where: {
          id: Number(id),
        },
      });

      if (!post) {
        return res.status(404).json({ message: 'Post não encontrado.' });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePost(req, res) {
    const { id } = req.params;

    const post = await db.Post.findByPk(id);

    console.log('post', post);

    if (!post) {
      return res.status(404).json({ message: 'Post não encontrado.' });
    }

    await post.destroy();

    return res.status(200).json({ message: 'Post deletado com sucesso.' });
  }
}

module.exports = PostController;
